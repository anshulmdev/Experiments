
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

const getStatus =<Supplies, Category extends keyof Supplies, Item extends keyof Category>(data: Supplies, name: Category, item: Item) => {
    console.log(name, item)
}

console.log()