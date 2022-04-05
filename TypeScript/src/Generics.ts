// function foo<T>(x: T): T { return x; }
// Example - 1
const myFunction = <T>(source: T): T => {
    return {...source};
}

const a = {id: 55, Name: "John"};
const b = myFunction(a);


//Example - 2

interface Contact {
    id: Number;
    name: String;
}

const myFunction = <T>(source: T): T => {
    return {...source};
}

const a = {id: 55, Name: "John"};
const b = myFunction(a);