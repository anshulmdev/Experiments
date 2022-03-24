// RECURSION


class CatalogGroup {
    constructor (name, collection = []) {
      this.name = name;
      this.collection = collection;
    }
    get total() {
      return parseInt(this.collection.reduce((total, nextItem) => total + nextItem.total,0))
    }
    print() {
      console.log(`${this.name.toUpperCase()}`)
      this.collection.forEach((e) => e.print())
    }
    
  }
  
  
  module.exports = CatalogGroup;