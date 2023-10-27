console.log("testing sprite-main.js");

class Sprite {
    constructor() {
        //this.width = 3;
        //this.height = 3;
        this.positionX = Math.floor(Math.random() * 85 - this.width + 1) + 0;
        this.positionY = 100;
        this.sprite = null;
        this.createSprite();
    }
    /* parameter - name of extended class */
    createSprite() {
        this.sprite = document.createElement("div");

        this.sprite.classList.add("sprite");

        this.sprite.style.width = this.width + "vw";
        this.sprite.style.height = this.height + "vh";
        this.sprite.style.left = this.positionX + "vw";
        this.sprite.style.bottom = this.positionY + "vh";

        const parentElement = document.getElementById("board");
        parentElement.appendChild(this.sprite);
    }
    fallDown() {
        if (this.positionY > 0 - this.height) {
            this.positionY--;
            this.sprite.style.bottom = this.positionY + "vh";
        }
    }
}

console.log("sprite loaded", Sprite);