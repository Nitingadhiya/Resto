import axios from 'axios';
import Http from '../api/http';
import GlobalVar from '../global';
import HeroesVar from '../../config/heroes-config';
import {Events} from './index';
import SentryReport from '../util/sentry';

global.cancel = [];
export const APICaller = (endPoint, method, token, body) => {
  // console.log(`${Http.APIURL}/${endPoint}`);
  //console.log(body, "body,,,,,,");
  return axios({
    method: method || 'get',
    url: `${Http.APIURL}/${endPoint}`,
    data: body, //&& JSON.parse(body),
    headers: {
      Authorization: `Bearer ${token}`,
      'X-localization': HeroesVar.language,
    },
    timeout: GlobalVar.requestTimeout,
    responseType: 'json',
    cancelToken: new axios.CancelToken(c => {
      global.cancel.push({endPoint, token: c});
    }),
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      if (axios.isCancel(error)) {
        return {data: 'cancel'};
      }
      // console.log(
      //   `there is an error from ["${Http.APIURL}/${endPoint}] >>`,
      //   error
      // );
      console.log('token', token);
      console.log('body', JSON.stringify(body) || '');
      console.log('method', method);
      console.log(error.response);
      if (!error.response) {
        Events.trigger('toast', `${error.message}`);
        Events.trigger('loading', false);
        return;
      }
      Events.trigger('loading', false);
      if (error.response.status === GlobalVar.responseToManyRequest) {
        Events.trigger('toast', `${error.response.data.message}`);
      }

      if (error.response.status === GlobalVar.responseNotFound) {
        Events.trigger('toast', `Status code: ${error.response.status}`);
        SentryReport.apiErrorReport(error, 'API');
        //Events.trigger("authNavigate");
        //return;
      }
      if (error.response.status === GlobalVar.responseUnauthorizedCode) {
        Events.trigger('toast', `${error.response.data.message}`);
        SentryReport.apiErrorReport(error, 'API');
        Events.trigger('authNavigate');
        //return;
      }
      if (error.response.status === GlobalVar.responseInternalServerCode) {
        SentryReport.apiErrorReport(error, 'API');
        Events.trigger('toast', `Status code: ${error.response.status}`);
        //return;
      }
      return {data: error.response.data, status: error.response.status};
    });
};
