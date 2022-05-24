var simpleGenerics = function (initial) {
    var str = initial;
    return [
        function () { return str; },
        function (v) {
            str = v;
        }
    ];
};
var _a = simpleGenerics("My Initial String"), myGFunc1 = _a[0], myGFunc2 = _a[1];
var _b = simpleGenerics(44), myFFunc1 = _b[0], myFFunc2 = _b[1];
//////// Example - 2
var myCards = [
    { name: "Silver Card - 1", power: 400, rank: 2 },
    { name: "Bronze Card - 2", power: 300, rank: 3 },
    { name: "Normal Card - 1", power: 200, rank: 4 },
    { name: "Gold Card - 1", power: 500, rank: 1 },
    { name: "Bronze Card - 1", power: 300, rank: 3 },
];
var sortCards = function (cards, sorter) {
    var sortedCards = cards.map(function (item) { return ({
        item: item,
        sortingOrder: sorter(item)
    }); });
    sortedCards.sort(function (a, b) { return a.sortingOrder - b.sortingOrder; });
    return sortedCards.map(function (item) { return item.item; });
};
console.log(sortCards(myCards, function (_a) {
    var rank = _a.rank;
    return rank;
}));
