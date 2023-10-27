console.log("testing sprite-raindrop.js");

class Raindrop extends Sprite {
    constructor(width, height) {
        super(width, height);
        // constructor needs to receive parameters to override
        // image source parameter for character models
        this.width = 2.5;
        this.height = 2.5;
        this.spriteRaindrop.classList.add("raindrop");
        this.createSprite();
        this.fallDown();
    }
 /*   createRaindrop() {
        //this.spriteRaindrop = document.createElement("div");

        //this.spriteRaindrop.classList.add("raindrop");

        this.spriteRaindrop.style.width = this.width + "vw";
        this.spriteRaindrop.style.height = this.height + "vh";
        this.spriteRaindrop.style.left = this.positionX + "vw";
        this.spriteRaindrop.style.bottom = this.positionY + "vh";

        const parentElement = document.getElementById("board");
        parentElement.appendChild(this.spriteRaindrop);
    }
    fallDown() {
        if (this.positionY > 0 - this.height) {
            this.positionY--;
            this.spriteRaindrop.style.bottom = this.positionY + "vh";
        }
    } */
}
/*
const raindropArr = [];

// spawn
setInterval(() => {
    const newRaindrop = new Raindrop();
    raindropArr.push(newRaindrop);
}, 1500);

// despawn
setInterval(() => {
    raindropArr.forEach((spawnRaindrop) => {
        spawnRaindrop.fallDown();

        if (spawnRaindrop.positionY < 0 - spawnRaindrop.height) {
            spawnRaindrop.spriteRaindrop.remove();
            raindropArr.shift();
        }
    });
}, 50);
*/
console.log("raindrop loaded", Raindrop);