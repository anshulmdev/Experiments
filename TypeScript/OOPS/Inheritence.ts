class Player {
    health: Number
    postion: Number

    greet () {
        return `Player with health ${this.health} says Hi`
    }
}


const mario = new Player()
mario.health = 10
mario.postion = 100


console.log(mario.greet());