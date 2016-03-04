Package.describe({
  name: 'cafe:base',
  version: '0.1.0',
  summary: 'Namespace for Cafe Application',
  git: 'https://github.com/meteor-space/cafe.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom('1.2.1');

  api.use([
    'check',
    'ecmascript',
    'space:messaging@3.1.1',
    'space:domain@0.2.1'
  ]);

  // SHARED
  api.addFiles([
    'source/shared/namespace.js',
    'source/shared/api-commands.js'
  ]);

  // SERVER ONLY
  api.addFiles([
    'source/server/errors.js',
    'source/server/events.js'
  ], 'server');

  api.export('Cafe');

});
