interface Dog {
    readonly name: string;
    readonly age: number;
}

const dog = (name: string, age: number): Dog => {
    return {
        name,
        age
    }
}


const example = dog("John", 12)
example.name = "newName"