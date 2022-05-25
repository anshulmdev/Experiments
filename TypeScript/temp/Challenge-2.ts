// ForEach, Filter, Map

const sample: number[] = [1, 2, 3, 4, 5];

const sum = <T>(items: T[], forEachFunc: (v: T) => void): void => {
    items.reduce((acc, index) => {
        forEachFunc(index)
        return undefined
    }, undefined)
}
console.log(sum(sample, (v) => console.log(`For Each: ${v}`)))