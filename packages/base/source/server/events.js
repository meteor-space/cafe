Space.messaging.define(Space.domain.Event, 'Cafe', {

  TabOpened: {
    tableNumber: Guid,
    waiterId: Guid
  }

});
