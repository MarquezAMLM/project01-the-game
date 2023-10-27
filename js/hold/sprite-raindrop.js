console.log("testing sprite-raindrop.js");

class Raindrop {
    constructor() {
        this.width = 2.5;
        this.height = 2.5;
        this.positionX = Math.floor(Math.random() * 85 - this.width + 1) + 0;
        this.positionY = 100;
        this.spriteRaindrop = null;
        this.createRaindrop();        
    }
    createRaindrop() {
        this.spriteRaindrop = document.createElement("div");

        this.spriteRaindrop.classList.add("raindrop");

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
    }
}

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

console.log("raindrop loaded", Raindrop);