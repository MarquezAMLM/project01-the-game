console.log("testing player.js");

class Player {
    constructor() {
        this.width = 10;
        this.height = 20;
        this.positionX = 50 - (this.width / 2);
        this.positionY = 0;

        this.playerElement = document.getElementById("player");

        this.playerElement.style.width = this.width + "vw";
        this.playerElement.style.height = this.height + "vh";
        this.playerElement.style.left = this.positionX + "vw";
        this.playerElement.style.bottom = this.positionY + "vh";
    }
    moveLeft() {
        this.positionX -= 3;
        this.playerElement.style.left = this.positionX + "vw";
    }
    moveRight() {
        this.positionX += 3;
        this.playerElement.style.left = this.positionX + "vw";
    }
}