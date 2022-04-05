interface myObject {
    id: Number;
    name: String;
    value?: Number;
}

interface ContactType {
    id: Number;
    name: String;
}

const cloneContact = (source: ContactType): myObject => {
    let sourceCopy: myObject = {...source};
    sourceCopy["value"] = 10;
    return sourceCopy
}

console.log(cloneContact({id: 55, name: "John"}))