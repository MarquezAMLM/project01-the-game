console.log("testing sprite-hero.js");

class Hero extends Sprite {
    constructor() {
        super();
        this.width = 5;
        this.height = 5;
        this.createSprite();
        this.sprite.classList.add("hero");

        if (this.sprite) {
            this.sprite.style.width = this.width + "vw";
            this.sprite.style.height = this.height + "vh";
        }
    }
    fallDown() {
        if (this.positionY > 0 - this.height) {
            this.positionY--;
            this.sprite.style.bottom = this.positionY + "vh";
        }       
    }
}

console.log("hero loaded", Hero);