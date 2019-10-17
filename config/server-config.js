const path = 'https://google.com';

const ServerVar = {
  path: path,
  contactType: 'work',
  server: 'live', //live //staging
  appURL: 'https://google.com',
  sentryURL() {
    return '';
  },
  privacyPolicyURL() {
    return '';
  },
  uxcamURL() {
    return '';
  },
};

export default ServerVar;
