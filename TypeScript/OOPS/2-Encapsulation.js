var Power = /** @class */ (function () {
    function Power() {
    }
    Power.prototype.setValue = function (value) {
        this.value = value;
        this.powerOf = 2;
    };
    Power.prototype.getPower = function () {
        return Math.pow(this.value, this.powerOf);
    };
    return Power;
}());
var five = new Power();
five.setValue(5);
console.log(five.getPower());
