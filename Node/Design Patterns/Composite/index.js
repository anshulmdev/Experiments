
var CatalogItem = require('./CatalogItem');
var CatalogGroup = require('./CatalogGroup')

var boots = new CatalogItem("Leather Boots", 79.99);
var sneakers = new CatalogItem("Kicks", 39.99);
var flipFlops = new CatalogItem("California work boots", 19.99);


var group_shoes = new CatalogGroup("Shoes Inventory", [boots, sneakers, flipFlops]);
var group_food = new CatalogGroup("Food Inventory", [
  new CatalogItem("Apple", 29.99),
  new CatalogItem("Kiwi", 229.99),
  new CatalogItem("Banana", 49.99)
]);
var keyChain = new CatalogItem("Key Chain", 0.99);

var completeCatalog = new CatalogGroup("Complete Inventory", [
  keyChain, group_shoes, group_food
])


console.log(`Total is: $${completeCatalog.total}`)
completeCatalog.print();