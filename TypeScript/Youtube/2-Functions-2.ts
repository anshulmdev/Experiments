

export const addition = (num1: (number|string), num2: number): number => {
    return +num1 + num2
}

export const promiseExample = (url: string):Promise<string> => Promise.resolve(`Data Recevied: ${url}`)
