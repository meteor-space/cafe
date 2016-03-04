describe('Cafe.Tab', function() {

  beforeEach(function() {

    this.tabId = new Guid();

    this.newTabData = {
      tableNumber: new Guid(),
      waiterId: new Guid()
    };

    this.drinksOrder = {
      items: [
        new Cafe.OrderedMenuItem({
          menuItemId: new Guid(),
          price: new Money(10),
          title: 'Coffee',
          category: new Cafe.MenuItemCategory('COFFEE')
        }),
        new Cafe.OrderedMenuItem({
          menuItemId: new Guid(),
          price: new Money(20),
          title: 'Tea',
          category: new Cafe.MenuItemCategory('TEA')
        })
      ]
    };

    this.foodOrder = {
      items: [
        new Cafe.OrderedMenuItem({
          menuItemId: new Guid(),
          price: new Money(10),
          title: 'Soup',
          category: new Cafe.MenuItemCategory('SOUP')
        }),
        new Cafe.OrderedMenuItem({
          menuItemId: new Guid(),
          price: new Money(20),
          title: 'Breakfast',
          category: new Cafe.MenuItemCategory('BREAKFAST')
        })
      ]
    };

  });

  describe('opening a new tab', function() {

    it('publishes a tab opened event', function() {
      Cafe.domain.test(Cafe.Tab)
        .given()
        .when(
          new Cafe.OpenTab(_.extend({}, this.newTabData, {
            targetId: this.tabId
          }))
        )
        .expect([
          new Cafe.TabOpened(_.extend({}, this.newTabData, {
            sourceId: this.tabId
          }))
        ]);
    });
  });

  describe('placing order with only drinks', function() {

    it('publishes a drinks ordered event', function() {
      Cafe.domain.test(Cafe.Tab)
        .given([
          new Cafe.TabOpened(_.extend({}, this.newTabData, {
            sourceId: this.tabId
          }))
        ])
        .when(
          new Cafe.PlaceOrder(_.extend({}, this.drinksOrder, {
            targetId: this.tabId
          }))
        )
        .expect([
          new Cafe.DrinksOrdered(_.extend({}, this.drinksOrder, {
            sourceId: this.tabId
          }))
        ]);
    });

  });

  describe('placing order with only food', function() {

    it('publishes a food ordered event', function() {
      Cafe.domain.test(Cafe.Tab)
        .given([
          new Cafe.TabOpened(_.extend({}, this.newTabData, {
            sourceId: this.tabId
          }))
        ])
        .when(
          new Cafe.PlaceOrder(_.extend({}, this.foodOrder, {
            targetId: this.tabId
          }))
        )
        .expect([
          new Cafe.FoodOrdered(_.extend({}, this.foodOrder, {
            sourceId: this.tabId
          }))
        ]);
    });

  });

  describe('placing order with food and drinks', function() {

    it('publishes a drinks ordered and food ordered events', function() {
      Cafe.domain.test(Cafe.Tab)
        .given([
          new Cafe.TabOpened(_.extend({}, this.newTabData, {
            sourceId: this.tabId
          }))
        ])
        .when(
          new Cafe.PlaceOrder(_.extend({}, {
            targetId: this.tabId,
            items: this.foodOrder.items.concat(this.drinksOrder.items)
          }))
        )
        .expect([
          new Cafe.FoodOrdered(_.extend({}, this.foodOrder, {
            sourceId: this.tabId
          })),
          new Cafe.DrinksOrdered(_.extend({}, this.drinksOrder, {
            sourceId: this.tabId
          }))
        ]);
    });

  });

});
