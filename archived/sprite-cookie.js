console.log("testing sprite-cookie.js");

class Cookie extends Sprite {
    constructor() {
        super();
        this.width = 2.5;
        this.height = 2.5;
        this.createSprite();
        this.sprite.classList.add("cookie");

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

console.log("cookie loaded", Cookie);