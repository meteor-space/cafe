Space.messaging.define(Space.domain.Command, 'Cafe', {

  OpenTab: {
    tableNumber: Guid,
    waiterId: Guid
  },

  CreateMenu: {},

  AddItemToMenu: {
    description: String,
    price: Money,
    category: Cafe.MenuItemCategory
  }

});
