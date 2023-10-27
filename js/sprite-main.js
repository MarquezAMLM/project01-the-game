console.log("testing sprite-main.js");

class Sprite {
    constructor() {
        this.positionX = Math.floor(Math.random() * 85 - this.width + 1) + 0;
        this.positionY = 100;
        this.sprite = null;
        this.createSprite();   
    }
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

const spriteArr = [];

// spawn
setInterval(() => {
    const newSprite = new Sprite();
    spriteArr.push(newSprite);
}, 1500);

// despawn
setInterval(() => {
    spriteArr.forEach((spawnSprite) => {
        spawnSprite.fallDown();

        if (spawnSprite.positionY < 0 - spawnSprite.height) {
            spawnSprite.sprite.remove();
            spriteArr.shift();
        }
    });
}, 50);

console.log("sprite loaded", Sprite);