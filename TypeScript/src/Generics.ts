// function foo<T>(x: T): T { return x; }

// Example - 1
const myFunction = <T>(source: T): T => {
    return {...source};
}

const a = {id: 55, name: "John"};
const b = myFunction(a);


//Example - 2
interface Contact {
    id: Number;
    name: String;
}

const myFunction2 = <T1, T2>(source: T1): T1 => {
    return {...source};
}

const a1 = {id: 55, name: "John"};
const b1 = myFunction2<Contact, Contact>(a1);