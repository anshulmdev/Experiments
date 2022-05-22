type Coordinate = [x: number, y: number, z:number];

const addCoordinate = (c1: Coordinate, c2: Coordinate, c3: Coordinate): Coordinate => {
    return [(c1[0] + c2[0] + c3[0]), (c1[1] + c2[1] + c3[1]), (c1[2] + c2[2] + c3[2])]
}

// Simple Closure Example

const multiply = (x1: number, x2: number): () => string => {
    const ans = x1*x2
    const result = (): string => {
        return `Multiplication result is ${ans}`
    }
    return result
}
console.log(multiply(9, 10)());


// Reference Example


const simpleString = (initial: string): [ () => string, (v: string) => void] => {
    let str: string = initial;
    return [
        () => str,
        (v: string) => {
            str = v;
        }
    ]
}

const [myFunc1, myFunc2] = simpleString("My Initial String");
console.log(myFunc1())
myFunc2("Let's change the string now")
console.log(myFunc1())