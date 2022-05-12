// Private Methods

class Power {
    private powerOf: number
    public value: number

    getPower() {
        this.powerOf = 2
        return Math.pow(this.value, this.powerOf)
    }

}

const five = new Power();
five.value = 5
five.powerOf = 10 // Private Method
console.log(five.getPower())