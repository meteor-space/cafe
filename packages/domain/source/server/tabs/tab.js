Space.eventSourcing.Aggregate.extend('Cafe.Tab', {

  STATES: {
    opened: 'opened',
    foodItems: [Cafe.OrderedMenuItem],
    drinkItems: [Cafe.OrderedMenuItem]
  },

  fields: {
    tableNumber: Guid,
    waiterId: Guid
  },

  commandMap() {
    return {
      'Cafe.OpenTab': this._openTab,
      'Cafe.PlaceOrder': this._placeOrder
    };
  },

  eventMap() {
    return {
      'Cafe.TabOpened': this._onTabOpened,
      'Cafe.DrinksOrdered': this._onDrinksOrdered,
      'Cafe.FoodOrdered': this._onFoodOrdered
    };
  },

  // ============= COMMAND HANDLERS =============

  _openTab(command) {
    let eventProps = this._eventPropsFromCommand(command);
    this.record(new Cafe.TabOpened(_.extend(eventProps, {})));
  },

  _placeOrder(command) {

    let foodItems = [];
    let drinkItems = [];

    for (let item of command.items) {
      if (item.category.isFood()) {
        foodItems.push(item);
      } else if (item.category.isDrink()) {
        drinkItems.push(item);
      }
    }

    if (foodItems.length > 0) {
      this.record(new Cafe.FoodOrdered({
        sourceId: this.this.getId(),
        items: foodItems
      }));
    }

    if (drinkItems.length > 0) {
      this.record(new Cafe.DrinksOrdered({
        sourceId: this.getId(),
        items: drinkItems
      }));
    }
  },

  // ============= EVENT HANDLERS ============

  _onTabOpened(event) {
    this._assignFields(event);
    this._state = this.STATES.opened;
    this.foodItems = [];
    this.drinkItems = [];
  },

  _onDrinksOrdered(event) {
    this.drinkItems.push(event.items);
  },

  _onFoodOrdered(event) {
    this.foodItems.push(event.items);
  }

});

Cafe.Tab.registerSnapshotType('Cafe.TabSnapshot');
