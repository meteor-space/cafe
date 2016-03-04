describe('Cafe.Tab', function() {

  beforeEach(function() {

    this.tabId = new Guid();

    this.newTabData = {
      tableNumber: new Guid(),
      waiterId: new Guid()
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

});
