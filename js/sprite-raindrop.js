console.log("testing sprite-raindrop.js");

class Raindrop extends Sprite {
    constructor() {
        super();
        this.width = 2.5;
        this.height = 2.5;
        this.createSprite();
        this.sprite.classList.add("raindrop");

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

console.log("raindrop loaded", Raindrop);