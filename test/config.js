var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/test\/unit/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
  // Karma serves files from '/base'
  baseUrl: '/base/src',

  paths: {
    'bbcrd': '/base/src'
  },

  shim: {
  },

  map: {
    '*': {
      'antie/widgets/label': 'mocks/widget',
      'antie/events/event': 'mocks/event'
    }
  },

  // ask Require.js to load these files (all our tests)
  deps: tests,

  // start test run, once Require.js is done
  callback: window.__karma__.start
});

require.def = define;
