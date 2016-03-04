Space.messaging.define(Space.domain.Command, 'Cafe', {

  // TABS

  OpenTab: {
    tableNumber: Guid,
    waiterId: Guid
  },

  PlaceOrder: {
    items: [Cafe.OrderedMenuItem]
  },

  // MENUS

  CreateMenu: {},

  AddItemToMenu: {
    title: String,
    description: String,
    price: Money,
    category: Cafe.MenuItemCategory
  }

});
