//const path = "http://192.168.1.169:8000";
//const path = "https://staging.roadheroes.com";
//const path = "https://roadheroes.com";
import ServerVar from "../../config/server-config";
const path = ServerVar.path;
const APIURL = `${path}/api`;
const version2 = "v2";
const loginEndPoint = `${version2}/login/password/twork`;
const accountEndPoint = `${version2}/account`;
const changePasswordEndPoint = `${version2}/reset-password`;
const achievementsEndPoint = `${version2}/achievements`;
const offerEndPoint = `${version2}/offers`;
const jobPostsEndPoint = `${version2}/job-posts`;
const detailsEndPoint = `${version2}/offers`;
const optionsMetaEndPoint = (country, language) =>
  `${version2}/options/${ServerVar.contactType}/${country}?locale=${language}`;
const validateRegisterEndPoint = `${version2}/validate/register`;
const registerEndPoint = `${version2}/register`;
const profileEndPoint = `${version2}/profile`;
const confirmEmailEndPoint = `${version2}/confirm/email`;
const confirmPhoneEndPoint = `${version2}/confirm/phone`;
const uploadPhoto = `${APIURL}/${version2}/profile/picture`;
const acceptTerms = `${version2}/account/toggle-accept-terms`;
const reviewEndPoint = `${version2}/reviews`;
const inviteEndPoint = `${version2}/invitation`;
const applicationInfo = `${version2}/application/information`;
const registerDevice = `${version2}/register/device`;
const acceptRejectOfferEndPoint = `${version2}/offers`;
const confirmOfferEndPoint = id => `${version2}/job-posts/${id}/apply`;
const offerRejectOptionsEndPoint = `${version2}/options/offer-rejection-reasons`;
const configurationEndpoint = `${version2}/configuration`;
const forgotPasswordEndPoint = `${version2}/password/reset-otp`; //`${version2}/password/email`;
const resetPasswordEndPoint = `${version2}/reset-password-otp`;
const sendOtpRequestEndPoint = `${version2}/verify-phone/send`;
const verifyOtpEndpoint = `${version2}/verify-phone/otp`;
const geoLocationEndpoint = `${version2}/get-geo-location`;
const pushNotificationLogsEndpoint = `${version2}/logs/push-notification`;
const getConversationListEndpoint = `${version2}/chat/threads`;
const getMessageEndpoint = (id, page) =>
  `${version2}/chat/threads/${id}/messages?page=${page}`;
const messageEndpoint = id => `${version2}/chat/threads/${id}/messages`;

module.exports = {
  APIURL,
  loginEndPoint,
  accountEndPoint,
  changePasswordEndPoint,
  achievementsEndPoint,
  offerEndPoint,
  jobPostsEndPoint,
  detailsEndPoint,
  optionsMetaEndPoint,
  validateRegisterEndPoint,
  registerEndPoint,
  profileEndPoint,
  confirmEmailEndPoint,
  confirmPhoneEndPoint,
  uploadPhoto,
  acceptTerms,
  reviewEndPoint,
  inviteEndPoint,
  applicationInfo,
  registerDevice,
  acceptRejectOfferEndPoint,
  confirmOfferEndPoint,
  offerRejectOptionsEndPoint,
  configurationEndpoint,
  forgotPasswordEndPoint,
  resetPasswordEndPoint,
  sendOtpRequestEndPoint,
  verifyOtpEndpoint,
  geoLocationEndpoint,
  pushNotificationLogsEndpoint,
  getConversationListEndpoint,
  getMessageEndpoint,
  messageEndpoint,
  path
};
