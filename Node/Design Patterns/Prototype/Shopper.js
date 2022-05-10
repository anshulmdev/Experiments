class Shopper {

    constructor(name, shoppingList) {
        this.name = name;
        this.shoppingList = [];
    }

    addItemToList(item) {
        this.shoppingList.push(item);
    }

    clone() {
      var proto = Object.getPrototypeOf(this);
      var cloned = Object.create(proto);
      cloned.name = this.name;
      cloned.shoppingList = [...this.shoppingList]
      return cloned
      
    }

}

module.exports = Shopper;
