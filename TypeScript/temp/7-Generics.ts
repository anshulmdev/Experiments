const simpleGenerics = <T>(initial: T): [ () => T, (v: T) => void] => {
    let str: T = initial;
    return [
        () => str,
        (v: T) => {
            str = v;
        }
    ]
}

const [myGFunc1, myGFunc2] = simpleGenerics("My Initial String");
const [myFFunc1, myFFunc2] = simpleGenerics(44);