Space.domain.Entity.extend('Cafe.MenuItem', {
  fields() {
    return {
      id: Guid,
      title: String,
      description: String,
      price: Money,
      category: Cafe.MenuItemCategory
    };
  }
});
