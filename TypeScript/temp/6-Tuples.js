var addCoordinate = function (c1, c2, c3) {
    return [(c1[0] + c2[0] + c3[0]), (c1[1] + c2[1] + c3[1]), (c1[2] + c2[2] + c3[2])];
};
// Simple Closure Example
var multiply = function (x1, x2) {
    var ans = x1 * x2;
    var result = function () {
        return "Multiplication result is ".concat(ans);
    };
    return result;
};
console.log(multiply(9, 10)());
// Reference Example
var simpleString = function (initial) {
    var str = initial;
    return [
        function () { return str; },
        function (v) {
            str = v;
        }
    ];
};
var _a = simpleString("My Initial String"), myFunc1 = _a[0], myFunc2 = _a[1];
console.log(myFunc1());
myFunc2("Let's change the string now");
console.log(myFunc1());
