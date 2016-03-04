Space.eventSourcing.Aggregate.extend('Cafe.Menu', {

  fields: {
    items: [Cafe.MenuItem]
  },

  commandMap() {
    return {
      'Cafe.CreateMenu': this._createMenu,
      'Cafe.AddItemToMenu': this._addItemToMenu
    };
  },

  eventMap() {
    return {
      'Cafe.MenuCreated': this._onMenuCreated,
      'Cafe.ItemAddedToMenu': this._onItemAddedToMenu
    };
  },

  // ============= COMMAND HANDLERS =============

  _createMenu(command) {
    let eventProps = this._eventPropsFromCommand(command);
    this.record(new Cafe.MenuCreated(_.extend(eventProps, {})));
  },

  _addItemToMenu(command) {
    let eventProps = this._eventPropsFromCommand(command);
    this.record(new Cafe.ItemAddedToMenu(_.extend(eventProps, {})));
  },

  // ============= EVENT HANDLERS ============

  _onMenuCreated(event) {
    this.items = [];
  },

  _onItemAddedToMenu(event) {
    const item = new Cafe.MenuItem({
      id: new Guid(),
      description: event.description,
      price: event.price,
      category: event.category
    });
    this.items.push(item);
  }

});

Cafe.Menu.registerSnapshotType('Cafe.MenuSnapshot');
