// ForEach, Filter, Map
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var sample = [1, 2, 3, 4, 5];
var sum = function (items, forEachFunc) {
    items.reduce(function (acc, index) {
        forEachFunc(index);
        return acc;
    }, undefined);
};
console.log(sum(sample, function (v) { return console.log("For Each: ".concat(v)); }));
var getEven = function (items, filterFunc) {
    return items.reduce(function (a, b) { return filterFunc(b) ? __spreadArray(__spreadArray([], a, true), [b], false) : a; }, []);
};
console.log(getEven(sample, function (v) { return v % 2 === 0 ? true : false; }));
