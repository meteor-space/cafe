describe("Cafe.MenuItemCategory", function() {

  beforeEach(function() {
    this.soups = new Cafe.MenuItemCategory('SOUP');
  });

  it('is serializable', function() {
    var copy = EJSON.parse(EJSON.stringify(this.soups));
    expect(copy.equals(this.soups)).to.be.true;
  });

  describe('construction', function() {

    it('takes a category and assigns it', function() {
      expect(this.soups.category).to.equal('SOUP');
    });

    it('throws error if invalid task category is assigned', function() {
      expect(function() {
        new Cafe.MenuItemCategory('XX');
      }).to.throw("Invalid menu item category 'XX'");
    });

  });

  describe('menu item category validation', function() {

    it('returns true for any valid menu item category', function() {
      for (let category of Cafe.MenuItemCategory.CATEGORIES) {
        expect(Cafe.MenuItemCategory.isValidMenuItemCategory(category)).to.be.true;
      }
    });

  });

  describe('checking for food categories', function() {

    it('returns true for any food menu item category', function() {
      for (let category of Cafe.MenuItemCategory.FOOD_CATEGORIES) {
        expect(Cafe.MenuItemCategory.isFood(category)).to.be.true;
      }
    });

    it('returns true if it is an active task status', function() {
      for (let category of Cafe.MenuItemCategory.FOOD_CATEGORIES) {
        let categoryInstance = new Cafe.MenuItemCategory(category);
        expect(categoryInstance.isFood()).to.be.true;
      }
    });

  });

  describe('checking for drink categories', function() {

    it('returns true for any drink menu item category', function() {
      for (let category of Cafe.MenuItemCategory.DRINK_CATEGORIES) {
        expect(Cafe.MenuItemCategory.isDrink(category)).to.be.true;
      }
    });

    it('returns true if it is an active task status', function() {
      for (let category of Cafe.MenuItemCategory.DRINK_CATEGORIES) {
        let categoryInstance = new Cafe.MenuItemCategory(category);
        expect(categoryInstance.isDrink()).to.be.true;
      }
    });

  });

  describe('immutability', function() {

    it('freezes itself', function() {
      expect(Object.isFrozen(this.soups)).to.be.true;
    });

  });
});
