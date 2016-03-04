Cafe.MenuItemCategory = Space.domain.ValueObject.extend('Cafe.MenuItemCategory', {

  Constructor(data) {

    // Allow to provide another object with category attribute as param
    let category = (data && data.category) ? data.category : data;

    if (!Cafe.MenuItemCategory.isValidMenuItemCategory(category)) {
      throw new Error(Cafe.MenuItemCategory.ERRORS.invalidMenuItemCategory(category));
    }

    this.category = category;
    Object.freeze(this);
  },

  // Defines the EJSON fields that are automatically serialized
  fields() {
    return {
      category: String
    };
  },

  toString() {
    return this.category;
  },

  isFood() {
    return Cafe.MenuItemCategory.isFood(this.category);
  },

  isDrink() {
    return Cafe.MenuItemCategory.isDrink(this.category);
  }

});

Cafe.MenuItemCategory.ERRORS = {
  invalidMenuItemCategory(category) {
    return `Invalid menu item category '${category}'`;
  }
};

Cafe.MenuItemCategory.isValidMenuItemCategory = function(category) {
  return Cafe.MenuItemCategory.CATEGORIES.indexOf(category) > -1;
};

Cafe.MenuItemCategory.getAll = function() {
  return Cafe.MenuItemCategory.CATEGORIES.slice();
};

Cafe.MenuItemCategory.isFood = function(category) {
  return Cafe.MenuItemCategory.FOOD_CATEGORIES.indexOf(category) > -1;
};

Cafe.MenuItemCategory.isDrink = function(category) {
  return Cafe.MenuItemCategory.DRINK_CATEGORIES.indexOf(category) > -1;
};

Cafe.MenuItemCategory.CATEGORIES = [
  'SOUP',
  'BREAKFAST',
  'MAIN_MEAL',
  'COFFEE',
  'TEA',
  'SMOOTHIES'
];

Cafe.MenuItemCategory.FOOD_CATEGORIES = [
  'SOUP',
  'BREAKFAST',
  'MAIN_MEAL'
];

Cafe.MenuItemCategory.DRINK_CATEGORIES = [
  'COFFEE',
  'TEA',
  'SMOOTHIES'
];

