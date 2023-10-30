console.log("testing sprite-main.js");

class Sprite {
    constructor() {
        this.sprite = null;
    }
    createSprite() {
        if (!this.sprite) {
            this.positionX = Math.floor(Math.random() * 85 - this.width + 1) + 0;
            this.positionY = 100;

            this.sprite = document.createElement("div");
            this.sprite.classList.add("sprite");

            this.sprite.style.width = this.width + "vw";
            this.sprite.style.height = this.height + "vh";
            this.sprite.style.left = this.positionX + "vw";
            this.sprite.style.bottom = this.positionY + "vh";

            const parentElement = document.getElementById("board");
            parentElement.appendChild(this.sprite);
        }
    }
    // can just have a placeholder like this:
    fallDown() {}
}

console.log("sprite loaded", Sprite);