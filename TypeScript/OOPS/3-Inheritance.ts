class Sample {
    public value: number
    protected power: number

    printNum() {
        console.log(this.value)
    }
}

class Multiplies extends Sample {
    setPower () {
        this.power = 2
    }
    upgrade () {
        let ans = this.value ** this.power
        console.log(ans)
    }
}

const myFunct = new Multiplies();
myFunct.value = 10
// myFunct.power = 2 -> protected
myFunct.setPower();
myFunct.printNum();
myFunct.upgrade();
