//const path = "https://staging.roadheroes.com";
const path = "https://roadheroes.com";
//const path = "http://192.168.1.61:8000";

const ServerVar = {
  path: path,
  contactType: "twork",
  server: "live", //live //staging
  appURL:
    "https://play.google.com/store/apps/details?id=com.twork&rdid=com.twork",
  sentryURL() {
    if (ServerVar.server === "live") {
      return "https://e3061180d0e440c48710ce8631181683@sentry.io/1770035";
    }
    return "https://e3061180d0e440c48710ce8631181683@sentry.io/1770035";
  },
  privacyPolicyURL() {
    if (ServerVar.server === "live") {
      return "https://twork.group/datenschutzerklaerung";
    }
    return "https://twork.group/datenschutzerklaerung";
  },
  uxcamURL() {
    if (ServerVar.server === "live") {
      return "hk0ct1fqpv1pg3b";
    }
    return "hk0ct1fqpv1pg3b";
  }
};

export default ServerVar;
