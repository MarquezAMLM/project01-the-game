class Sprite {
    constructor() {
        this.sprite = null;
    }
    createSprite() {
        if (!this.sprite) {
            this.positionX = Math.floor(Math.random() * 82 - this.width + 1) + 0;
            this.positionY = 80;

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

class Cookie extends Sprite {
    constructor() {
        super();
        this.width = 4;
        this.height = 4;
        this.createSprite();
        this.sprite.classList.add("cookie");
        this.spawn = 1000;

        if (this.sprite) {
            this.sprite.style.width = this.width + "vw";
            this.sprite.style.height = this.height + "vh";

            this.sprite.style.backgroundImage = "url('/images/game.sprite.cookie.nobg.png')";
        }
    }
    fallDown() {
        if (this.positionY > 0 - this.height) {
            this.positionY--;
            this.sprite.style.bottom = this.positionY + "vh";
        }       
    }
}

class Raindrop extends Sprite {
    constructor() {
        super();
        this.width = 2;
        this.height = 4;
        this.createSprite();
        this.sprite.classList.add("raindrop");

        if (this.sprite) {
            this.sprite.style.width = this.width + "vw";
            this.sprite.style.height = this.height + "vh";

            this.sprite.style.backgroundImage = "url('/images/game.sprite.raindrop.nobg.png')";
        }
    }
    fallDown() {
        if (this.positionY > 0 - this.height) {
            this.positionY -= 1;
            this.sprite.style.bottom = this.positionY + "vh";
        }       
    }
}

class Poop extends Sprite {
    constructor() {
        super();
        this.width = 5;
        this.height = 10;
        this.createSprite();
        this.sprite.classList.add("poop");

        if (this.sprite) {
            this.sprite.style.width = this.width + "vw";
            this.sprite.style.height = this.height + "vh";

            this.sprite.style.backgroundImage = "url('/images/game.sprite.poop.nobg.png')";
        }
    }
    fallDown() {
        if (this.positionY > 0 - this.height) {
            this.positionY--;
            this.sprite.style.bottom = this.positionY + "vh";
        }       
    }
}