import ServerVar from '../../config/server-config';
const path = ServerVar.path;
const APIURL = `${path}/api`;
const version2 = 'v2';
const loginEndPoint = `${version2}/login/password/twork`;

module.exports = {
  APIURL,
  loginEndPoint,
  path,
};
