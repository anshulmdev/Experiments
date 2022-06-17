var Car = /** @class */ (function () {
    function Car(model, milage) {
        this.model = model;
        this.milage = milage;
    }
    return Car;
}());
var sampleCar = new Car("Hyundai", 55);
// sampleCar.milage = 90; // Error
var SingleTonExample = /** @class */ (function () {
    function SingleTonExample() {
        this.myList = [1, 2, 3, 4];
    }
    SingleTonExample.addNum = function (num) {
        this.instance.myList.push(num);
    };
    SingleTonExample.getList = function () {
        return this.instance.myList;
    };
    SingleTonExample.instance = new SingleTonExample();
    return SingleTonExample;
}());
// const sample1 = new SingleTonExample() // Error
SingleTonExample.addNum(90);
console.log(SingleTonExample.getList());
