Space.messaging.define(Space.domain.Event, 'Cafe', {

  // TABS

  TabOpened: {
    tableNumber: Guid,
    waiterId: Guid
  },

  DrinksOrdered: {
    items: [Cafe.OrderedMenuItem]
  },

  FoodOrdered: {
    items: [Cafe.OrderedMenuItem]
  },

  // MENUS

  MenuCreated: {},

  ItemAddedToMenu: {
    title: String,
    description: String,
    price: Money,
    category: Cafe.MenuItemCategory
  }

});
