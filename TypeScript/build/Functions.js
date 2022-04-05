const cloneContact = (source) => {
    let sourceCopy = Object.assign({}, source);
    console.log(sourceCopy);
    sourceCopy["value"] = 10;
    return sourceCopy;
};
console.log(cloneContact({ id: 55, name: "John" }));
