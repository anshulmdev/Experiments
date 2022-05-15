/*
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

*/

interface Composite {
    name: string
    price?: number
    collection?: []
    total: () => {}
    print: () => {}
}

export class Directories implements Composite {
    constructor (name: string, collection = [] ) {
        this.name = name;
        this.collection = collection;
    }
    getTotal() {
        return +this.collection.reduce((total, item) => total + item.total, 0)
    }
    print() {
        this.collection.forEach((e) => e.print())
    }


    
}