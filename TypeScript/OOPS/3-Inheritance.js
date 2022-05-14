var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Sample = /** @class */ (function () {
    function Sample() {
    }
    Sample.prototype.printNum = function () {
        console.log(this.value);
    };
    return Sample;
}());
var Multiplies = /** @class */ (function (_super) {
    __extends(Multiplies, _super);
    function Multiplies() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Multiplies.prototype.setPower = function () {
        this.power = 2;
    };
    Multiplies.prototype.upgrade = function () {
        var ans = Math.pow(this.value, this.power);
        console.log(ans);
    };
    return Multiplies;
}(Sample));
var myFunct = new Multiplies();
myFunct.value = 10;
// myFunct.power = 2 -> protected
myFunct.setPower();
myFunct.printNum();
myFunct.upgrade();
