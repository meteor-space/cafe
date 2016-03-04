describe('Cafe.Menu', function() {

  beforeEach(function() {

    this.menuId = new Guid();

    this.menuItemData = {
      title: 'Menu item title',
      description: 'My menu item description',
      price: new Money(10),
      category: new Cafe.MenuItemCategory('SOUP')
    };

  });

  describe('creating a new menu', function() {

    it('publishes a menu created event', function() {
      Cafe.domain.test(Cafe.Menu)
        .given()
        .when(
          new Cafe.CreateMenu(_.extend({}, {
            targetId: this.menuId
          }))
        )
        .expect([
          new Cafe.MenuCreated(_.extend({}, {
            sourceId: this.menuId
          }))
        ]);
    });
  });

  describe('adding item to menu', function() {

    it('publishes a menu item added event', function() {
      Cafe.domain.test(Cafe.Menu)
        .given([
          new Cafe.CreateMenu(_.extend({}, {
            targetId: this.menuId
          }))
        ])
        .when(
          new Cafe.AddItemToMenu(_.extend({}, this.menuItemData, {
            targetId: this.menuId
          }))
        )
        .expect([
          new Cafe.ItemAddedToMenu(_.extend({}, this.menuItemData, {
            sourceId: this.menuId
          }))
        ]);
    });
  });

});
