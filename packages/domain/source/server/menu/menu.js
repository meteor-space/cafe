Space.eventSourcing.Aggregate.extend('Cafe.Menu', {

  fields: {
    items: [Cafe.MenuItem]
  },

  commandMap() {
    return {
      'Cafe.CreateMenu': this._createMenu
    };
  },

  eventMap() {
    return {
      'Cafe.MenuCreated': this._onMenuCreated
    };
  },

  // ============= COMMAND HANDLERS =============

  _createMenu(command) {
    let eventProps = this._eventPropsFromCommand(command);
    this.record(new Cafe.MenuCreated(_.extend(eventProps, {})));
  },

  // ============= EVENT HANDLERS ============

  _onMenuCreated(event) {
    this.items = [];
  }

});

Cafe.Menu.registerSnapshotType('Cafe.MenuSnapshot');
