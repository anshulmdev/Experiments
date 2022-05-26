var officeSupplies = {
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
};
var getStatus = function (data, name, item) {
    console.log(name, item);
    return data[name][item];
};
console.log(getStatus(officeSupplies, "Stationary Item", "Diary"));
