/*
Scopes
1. Optional deep objects
2. Optional callbacks

*/

interface optionalDeepObject {
    name: string
    data?: {
        id: number
        pin?: number
        state? : string
    }
}

const data1: optionalDeepObject = {
    name: "John Doe",
    data: {
        id: 0
    }
}