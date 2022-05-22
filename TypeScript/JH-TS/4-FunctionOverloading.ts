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

///////////////////////////////////////

function parseCoordinate(str: string): Coordinate;
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate (var1: unknown, var2?: unknown): Coordinate {
    if (typeof var1 === 'object') return {...(var1 as Coordinate)}
    else if (typeof var1 === 'number') return {x: (var1 as number), y: (var2 as number)}
    else {
        (var1 as string).split(",").forEach((str) => {
            const [key, value] = str.split(":");
            let coord = {}
            coord[key as "x" | "y"] = parseInt(value, 10);
            return coord
          });

    }
}

console.log(parseCoordinate(10, 20))
console.log(parseCoordinate({x: 10, y: 20}))
console.log(parseCoordinate("x:12,y:22"));