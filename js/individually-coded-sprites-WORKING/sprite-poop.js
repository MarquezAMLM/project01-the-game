console.log("testing sprite-poop.js");

class Poop {
    constructor() {
        this.width = 2.5;
        this.height = 2.5;
        this.positionX = Math.floor(Math.random() * 85 - this.width + 1) + 0;
        this.positionY = 100;
        this.spritePoop = null;
        this.createPoop();        
    }
    createPoop() {
        this.spritePoop = document.createElement("div");

        this.spritePoop.classList.add("poop");

        this.spritePoop.style.width = this.width + "vw";
        this.spritePoop.style.height = this.height + "vh";
        this.spritePoop.style.left = this.positionX + "vw";
        this.spritePoop.style.bottom = this.positionY + "vh";

        const parentElement = document.getElementById("board");
        parentElement.appendChild(this.spritePoop);
    }
    fallDown() {
        if (this.positionY > 0 - this.height) {
            this.positionY--;
            this.spritePoop.style.bottom = this.positionY + "vh";
        }
    }
}

const poopArr = [];

// spawn
setInterval(() => {
    const newPoop = new Poop();
    poopArr.push(newPoop);
}, 1500);

// despawn
setInterval(() => {
    poopArr.forEach((spawnPoop) => {
        spawnPoop.fallDown();

        if (spawnPoop.positionY < 0 - spawnPoop.height) {
            spawnPoop.spritePoop.remove();
            poopArr.shift();
        }
    });
}, 50);

console.log("poop loaded", Poop);