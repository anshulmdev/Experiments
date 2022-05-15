/*
Scopes
1. Callback Functions
2. Callback Types
3. Custom Types
4. Closures

*/

type additionPattern = (num1: number, num2: number) => number;

const addNums = (num1: number, num2: number): number => { return num1 + num2 }

const callBack1 = (var1: string, var2: string, addNums: additionPattern) => {
    return addNums(+var1, +var2)
}

console.log(callBack1('9','9', addNums))