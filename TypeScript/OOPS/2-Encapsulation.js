var Power = /** @class */ (function () {
    function Power() {
    }
    Power.prototype.getPower = function () {
        this.powerOf = 2;
        return Math.pow(this.value, this.powerOf);
    };
    return Power;
}());
var five = new Power();
five.value = 5;
five.powerOf = 10; // Private Method
console.log(five.getPower());
