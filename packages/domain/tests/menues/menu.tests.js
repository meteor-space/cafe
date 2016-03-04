describe('Cafe.Menu', function() {

  beforeEach(function() {

    this.menuId = new Guid();

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

});
