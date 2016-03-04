Package.describe({
  name: 'cafe:domain',
  version: '0.1.0',
  summary: 'Domain Bounded context for Cafe application',
  git: 'https://github.com/meteor-space/cafe.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom('1.2.1');

  api.use([
    'mongo',
    'check',
    'ecmascript',
    'underscore',
    'space:event-sourcing@3.0.0',
    'cafe:base'
  ]);

  api.addFiles([
    'source/server/module.js',
    // TABS
    'source/server/tabs/tab.js',
    'source/server/tabs/tab-router.js'
  ], 'server');

});


Package.onTest(function(api) {

  api.use([
    'ecmascript',
    'mongo',
    'check',
    'underscore',
    'cafe:base',
    'cafe:domain',
    'space:testing@3.0.1',
    'space:testing-messaging@3.0.1',
    'space:testing-event-sourcing@3.0.0',
    'practicalmeteor:munit@2.1.5'
  ]);

  api.addFiles([
    'tests/tabs/tab.tests.js'
  ], 'server');

});
