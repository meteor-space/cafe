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

});
