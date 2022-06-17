class Car {
    constructor (public readonly model: string, public readonly milage: number){ 

    }
}

const sampleCar = new Car("Hyundai", 55);
// sampleCar.milage = 90; // Error