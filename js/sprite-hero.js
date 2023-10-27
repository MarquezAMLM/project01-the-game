console.log("testing sprite-hero.js");

class Hero {
    constructor() {
        this.width = 2.5;
        this.height = 2.5;
        this.positionX = Math.floor(Math.random() * 85 - this.width + 1) + 0;
        this.positionY = 100;
        this.spriteHero = null;
        this.createHero();        
    }
    createHero() {
        this.spriteHero = document.createElement("div");

        this.spriteHero.classList.add("hero");

        this.spriteHero.style.width = this.width + "vw";
        this.spriteHero.style.height = this.height + "vh";
        this.spriteHero.style.left = this.positionX + "vw";
        this.spriteHero.style.bottom = this.positionY + "vh";

        const parentElement = document.getElementById("board");
        parentElement.appendChild(this.spriteHero);
    }
    fallDown() {
        if (this.positionY > 0 - this.height) {
            this.positionY--;
            this.spriteHero.style.bottom = this.positionY + "vh";
        }
    }
}

const heroArr = [];

// spawn
setInterval(() => {
    const newHero = new Hero();
    heroArr.push(newHero);
}, 1500);

// despawn
setInterval(() => {
    heroArr.forEach((spawnHero) => {
        spawnHero.fallDown();

        if (spawnHero.positionY < 0 - spawnHero.height) {
            spawnHero.spriteHero.remove();
            heroArr.shift();
        }
    });
}, 50);

console.log("hero loaded", Hero);