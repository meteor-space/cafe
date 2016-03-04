Space.eventSourcing.Aggregate.extend('Cafe.Tab', {

  STATES: {
    opened: 'opened'
  },

  fields: {
    tableNumber: Guid,
    waiterId: Guid
  },

  commandMap() {
    return {
      'Cafe.OpenTab': this._openTab
    };
  },

  eventMap() {
    return {
      'Cafe.TabOpened': this._onTabOpened
    };
  },

  // ============= COMMAND HANDLERS =============

  _openTab(command) {
    let eventProps = this._eventPropsFromCommand(command);
    this.record(new Cafe.TabOpened(_.extend(eventProps, {})));
  },

  // ============= EVENT HANDLERS ============

  _onTabOpened(event) {
    this._assignFields(event);
    this._state = this.STATES.opened;
  }

});

Cafe.Tab.registerSnapshotType('Cafe.TabSnapshot');
