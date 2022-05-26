
const officeSupplies = {
    "Stationary Item": {
        "Pens": true,
        "Pencils": true,
        "Diary": false
    },
    "Furniture": {
        "Desk": true,
        "Chair": true
    },
    "Gadgets": {
        "Monitors": false,
        "Keyboard": true
    }
}

const getStatus =<Supplies, Category extends keyof Supplies, Item extends keyof Supplies[Category]>(data: Supplies, name: Category, item: Item) => {
    console.log(name, item)
    return data[name][item]
}

console.log(getStatus(officeSupplies, "Stationary Item", "Diary"))