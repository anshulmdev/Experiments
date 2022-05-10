var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.greet = function () {
        return "Player with health ".concat(this.health, " says Hi");
    };
    return Player;
}());
var mario = new Player();
mario.health = 10;
mario.postion = 100;
console.log(mario.greet());
