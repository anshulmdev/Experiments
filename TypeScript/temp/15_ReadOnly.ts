class Car {
    constructor (public readonly model: string, public readonly milage: number){ 

    }
}

const sampleCar = new Car("Hyundai", 55);
// sampleCar.milage = 90; // Error


class SingleTonExample {
    private constructor (){}
    static instance: SingleTonExample = new SingleTonExample()


    private myList: number[] = [1,2,3,4]

    static addNum (num: number) {
        this.instance.myList.push(num)
    }

    static getList (){
        return this.instance.myList
    }
}

// const sample1 = new SingleTonExample() // Error
SingleTonExample.addNum(90);
console.log(SingleTonExample.getList())