Space.eventSourcing.Router.extend('Cafe.TabRouter', {

  eventSourceable: Cafe.Tab,

  initializingMessage: Cafe.OpenTab,

  routeCommands: [
    Cafe.PlaceOrder
  ]

});
