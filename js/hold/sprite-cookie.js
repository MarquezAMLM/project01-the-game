console.log("testing sprite-cookie.js");

class Cookie {
    constructor() {
        this.width = 2.5;
        this.height = 2.5;
        this.positionX = Math.floor(Math.random() * 85 - this.width + 1) + 0;
        this.positionY = 100;
        this.spriteCookie = null;
        this.createCookie();        
    }
    createCookie() {
        this.spriteCookie = document.createElement("div");

        this.spriteCookie.classList.add("cookie");

        this.spriteCookie.style.width = this.width + "vw";
        this.spriteCookie.style.height = this.height + "vh";
        this.spriteCookie.style.left = this.positionX + "vw";
        this.spriteCookie.style.bottom = this.positionY + "vh";

        const parentElement = document.getElementById("board");
        parentElement.appendChild(this.spriteCookie);
    }
    fallDown() {
        if (this.positionY > 0 - this.height) {
            this.positionY--;
            this.spriteCookie.style.bottom = this.positionY + "vh";
        }
    }
}

const cookieArr = [];

// spawn
setInterval(() => {
    const newCookie = new Cookie();
    cookieArr.push(newCookie);
}, 1500);

// despawn
setInterval(() => {
    cookieArr.forEach((spawnCookie) => {
        spawnCookie.fallDown();

        if (spawnCookie.positionY < 0 - spawnCookie.height) {
            spawnCookie.spriteCookie.remove();
            cookieArr.shift();
        }
    });
}, 50);

console.log("cookie loaded", Cookie);