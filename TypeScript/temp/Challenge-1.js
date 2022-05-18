var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var houses = [
    { "name": "Atreides", "planets": "Calladan" },
    { "name": "Corrino", "planets": ["Kaitan", "Salusa Secundus"] },
    { "name": "Harkonnen", "planets": ["Giedi Prime", "Arrakis"] }
];
function findHouses(arg1, filter) {
    var houses = typeof arg1 === 'string' ? JSON.parse(arg1) : arg1;
    return (filter ? houses.filter(filter) : houses).map(function (house) { return (__assign({ id: houses.indexOf(house) }, house)); });
}
console.log(findHouses(JSON.stringify(houses), function (_a) {
    var name = _a.name;
    return name === "Atreides";
}));
console.log(findHouses(houses, function (_a) {
    var name = _a.name;
    return name === "Harkonnen";
}));
