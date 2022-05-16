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
