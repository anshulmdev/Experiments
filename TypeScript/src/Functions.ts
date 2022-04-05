interface myObject {
    id: Number;
    name: String;
}

const cloneContact = (source: myObject): myObject => {
    return Object.apply({}, source)
}