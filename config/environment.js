/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dd-explore',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    mapbox: {
      accessToken: 'pk.eyJ1Ijoid2lsYnVybmZvcmNlIiwiYSI6InUzTmxaNHcifQ.TfoRyRJIHvzqV3HwSGEp9w',
    },
    contentSecurityPolicy: {
        'img-src': "'self' blob:* data: *.mapbox.com",
        'child-src': "blob:",
        'connect-src': "'self' api.lvh.me:5000 localhost:4200 *.mapbox.com *.mockable.io",
        'font-src': "'self' *.cloudflare.com fonts.gstatic.com data:application/*",
        'style-src': "'self' 'unsafe-inline' *.cloudflare.com fonts.googleapis.com",
        'script-src': "'self' 'unsafe-eval' *.mapbox.com *.cloudflare.com"
    }
  };



  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
