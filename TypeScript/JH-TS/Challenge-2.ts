// ForEach, Filter, Map

const sample: number[] = [1, 2, 3, 4, 5];

const sum = <T>(items: T[], forEachFunc: (v: T) => void): void => {
    items.reduce((acc, index) => {
        forEachFunc(index)
        return acc
    }, undefined)
}
console.log(sum(sample, (v) => console.log(`For Each: ${v}`)))

const getEven = <T>(items: T[], filterFunc: (v: T) => boolean): T[] => {
    return items.reduce(( a, b ) => filterFunc(b) ? [...a, b] : a , [])
}

console.log(getEven(sample, (v) => v%2===0 ? true : false));

const powerOfTwo = <T>(items: T[], power: (v: T) => number): T[] => {
    return items.reduce(( a, b ) => [...a, power(b)], [])
}


console.log(powerOfTwo(sample, (v) => v**2));