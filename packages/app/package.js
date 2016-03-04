Package.describe({
  name: 'cafe:app',
  version: '0.1.0',
  summary: 'Cafe - demo application based on Space',
  git: 'https://github.com/meteor-space/cafe.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom('1.2.1');

  api.use([
    'meteor-base',
    'standard-minifiers',
    'ecmascript',
    'spacebars',
    'mongo',
    'session',
    'check',
    'space:base@4.1.2',
    'space:messaging@3.2.0',
    'cafe:base',
    'cafe:domain'
  ]);

  // SERVER Configuration
  api.addFiles([
    // PROJECTIONS
    // PUBLICATIONS
    'source/server/publications.js',
    // APPLICATION
    'source/server/application.js'
  ], 'server');

  // SHARED configuration
  api.addFiles([
    'source/shared/apis/cafe-api.js'
  ]);

  // CLIENT Configuration
  api.addFiles([
    'source/client/application.js'
  ], 'client');

  // Startup
  api.addFiles([
    'source/startup.js'
  ]);

});

Package.onTest(function(api) {

  api.use([
    'mongo',
    'ecmascript',
    'space:testing@3.0.1',
    'cafe:base',
    'cafe:domain',
    'cafe:app',
    'practicalmeteor:munit@2.1.5'
  ]);

  api.addFiles([
  ], 'server');

});
