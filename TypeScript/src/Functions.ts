interface myObject {
    id: Number;
    name: String;
    value: Number;
}

interface Contact {
    id: Number;
    name: String;
}

const cloneContact = (source: Contact): myObject => {
    let sourceCopy: myObject = Object.apply({}, source);
    sourceCopy.value = 10;
    return sourceCopy
}

console.log(cloneContact({id: 55, name: "John"}))