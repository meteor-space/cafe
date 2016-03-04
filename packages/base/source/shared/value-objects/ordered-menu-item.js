Cafe.MenuItemCategory = Space.domain.ValueObject.extend('Cafe.OrderedMenuItem', {

  fields() {
    return {
      menuItemId: Guid,
      price: Money,
      title: String
    };
  }

});

