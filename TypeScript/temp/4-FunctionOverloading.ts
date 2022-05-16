/*
Scopes
 // Different variable structure object vs nums
1. Prepare Interface
2. Unknown Type
3. Function Signatures
4. Refer Video
5. Runtime vs Compile Time
6. As Keyword

*/

interface Coordinate {
    x: number
    y: number
}

const parseCoordinateFromObject = (obj: Coordinate): Coordinate => {
    return {...obj}
}
const parseCoordinateFromNumber = (x: number, y: number): Coordinate => {
    return {x, y}
}

const parseCoordinate = (var1: unknown, var2?: unknown): Coordinate => {
    let coord = {x: 0, y: 0}
    if (typeof var1 === 'object') coord =  {...(var1 as Coordinate)}
    else coord = {x: (var1 as number), y: (var2 as number)}
    return coord
}

console.log(parseCoordinate(10, 20))
console.log(parseCoordinate({x: 10, y: 20}))
