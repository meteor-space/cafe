Space.eventSourcing.Router.extend('Cafe.MenuRouter', {

  eventSourceable: Cafe.Menu,

  initializingMessage: Cafe.CreateMenu,

  routeCommands: [
    Cafe.AddItemToMenu
  ]

});
