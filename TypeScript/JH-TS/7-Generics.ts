const simpleGenerics = <T>(initial: T): [ () => T, (v: T) => void] => {
    let str: T = initial;
    return [
        () => str,
        (v: T) => {
            str = v;
        }
    ]
}

const [myGFunc1, myGFunc2] = simpleGenerics("My Initial String");
const [myFFunc1, myFFunc2] = simpleGenerics(44);


//////// Example - 2
const myCards = [
    { name: "Silver Card - 1", power: 400, rank: 2},
    { name: "Bronze Card - 2", power: 300, rank: 3},
    { name: "Normal Card - 1", power: 200, rank: 4},
    { name: "Gold Card - 1", power: 500, rank: 1},
    { name: "Bronze Card - 1", power: 300, rank: 3},
]


const sortCards = <Cards>(cards: Cards[], sorter: (v: Cards) => number) => {
    const sortedCards = cards.map((item) => ({
        item,
        sortingOrder: sorter(item)
    }))
    sortedCards.sort((a, b) => a.sortingOrder - b.sortingOrder);
    return sortedCards.map((item) => item.item)
}

console.log(sortCards(myCards, ({ rank }) => rank));