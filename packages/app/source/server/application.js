Cafe.App = Space.Application.define('Cafe.App', {

  configuration: {
    appId: 'Cafe.App'
  },

  requiredModules: [
    'Cafe.domain'
  ],

  singletons: [
    'Cafe.CafeApi'
  ],

  onInitialize() {
  },

  onStart() {
  },

  onReset() {
  }

});
