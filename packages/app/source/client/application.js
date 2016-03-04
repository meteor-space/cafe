Space.Application.extend('Cafe.App', {

  configuration: {
    appId: 'Cafe.App'
  },

  requiredModules: [
    'Space.messaging'
  ],

  singletons: [
    'Cafe.CafeApi'
  ],

  onInitialize() {
  }

});