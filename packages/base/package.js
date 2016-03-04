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
    'space:domain@0.2.1',
    'space:vo-monetary@0.2.0'
  ]);

  // SHARED
  api.addFiles([
    // NAMESPACE
    'source/shared/namespace.js',
    // VALUE OBJECTS
    'source/shared/value-objects/menu-item-category.js',
    // DOMAIN COMMANDS
    'source/shared/api-commands.js'
  ]);

  // SERVER ONLY
  api.addFiles([
    // ENTITIES
    'source/server/entities/menu-item.js',
    // DOMAIN ERRORS
    'source/server/errors.js',
    // DOMAIN EVENTS
    'source/server/events.js'
  ], 'server');

  api.export('Cafe');

});


Package.onTest(function(api) {

  api.use([
    'ecmascript',
    'check',
    'ejson',
    'practicalmeteor:munit@2.1.5',
    'space:testing@3.0.1',
    'cafe:base'
  ]);

  api.addFiles([
    'tests/value-objects/menu-item-category.unit.js'
  ]);

});