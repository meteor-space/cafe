Space.domain.Entity.extend('Cafe.MenuItem', {
  fields() {
    return {
      id: Guid,
      description: String,
      price: Money,
      category: Cafe.MenuItemCategory
    };
  }
});
