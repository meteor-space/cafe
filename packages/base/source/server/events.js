Space.messaging.define(Space.domain.Event, 'Cafe', {

  // TABS

  TabOpened: {
    tableNumber: Guid,
    waiterId: Guid
  },

  // MENUS

  MenuCreated: {},

  ItemAddedToMenu: {
    description: String,
    price: Money,
    category: Cafe.MenuItemCategory
  }

});
