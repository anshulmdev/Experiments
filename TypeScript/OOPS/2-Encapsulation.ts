class Power {
    private powerOf: number
    public value: number

    setValue(value) {
        this.value = value
        this.powerOf = 2
    }

    getPower() {
        return Math.pow(this.value, this.powerOf)
    }

}

const five = new Power();
five.setValue(5);
console.log(five.getPower())