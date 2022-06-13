var Database = /** @class */ (function () {
    function Database() {
        this.myData = {};
    }
    Database.prototype.get = function (id) {
        return this.myData[id];
    };
    Database.prototype.set = function (id, value) {
        this.myData[id] = value;
    };
    return Database;
}());
var database1 = new Database();
database1.set(10, "Ten");
database1.set(10, "10");
database1.myData[10] = "new Ten";
console.log(database1.get(10));
