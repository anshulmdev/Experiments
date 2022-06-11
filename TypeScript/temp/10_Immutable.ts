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


// Example - 2

interface Cood {
    x: number,
    y: number;
    z: number
}

const makeCoordinates = (x: number, y: number, z:number): readonly Cood => {
    return {
        x, y, z
    }
}
const exmaple2 = makeCoordinates(9,9,9);
exmaple2.x = 90

// Example - 3

const makeCoordinates2 = (x: number, y: number, z:number): readonly [number, number, number] => {
    return [x, y, z]
}
const example3 = makeCoordinates2(9,9,9);
example3.x = 90


// Example - 4

const x = 10
x = 90; // Error

const y = [50, 90]
y[0] = 100; // No Error

const z = [50, 90] as const
z[0] = 10 // Error