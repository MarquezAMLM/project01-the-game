class Player {
    constructor() {
        this.width = 10;
        this.height = 10;
        this.positionX = 43 - (this.width / 2);
        this.positionY = 5;

        this.playerElement = document.getElementById("player");

        this.playerElement.style.width = this.width + "vw";
        this.playerElement.style.height = this.height + "vh";
        this.playerElement.style.left = this.positionX + "vw";
        this.playerElement.style.bottom = this.positionY + "vh";

        this.playerElement.style.backgroundImage = "url('../images/game.sprite.herocookie.nobg.png')";
    }
    moveLeft() {
        this.positionX -= 2.5;
        this.playerElement.style.left = this.positionX + "vw";
    }
    moveRight() {
        this.positionX += 2.5;
        this.playerElement.style.left = this.positionX + "vw";
    }
}
