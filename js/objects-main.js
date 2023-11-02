class Player {
    constructor() {
        this.width = 5;
        this.height = 10;
        this.positionX = 43 - (this.width / 2);
        this.positionY = 5;

        this.playerElement = document.getElementById("player");

        this.playerElement.style.width = this.width + "vw";
        this.playerElement.style.height = this.height + "vh";
        this.playerElement.style.left = this.positionX + "vw";
        this.playerElement.style.bottom = this.positionY + "vh";

        this.playerElement.style.backgroundImage = "url('./images/game.sprite.player.right.nobg.png')";
    }
    moveLeft() {
        this.positionX -= 3;
        this.playerElement.style.left = this.positionX + "vw";
    }
    moveRight() {
        this.positionX += 3;
        this.playerElement.style.left = this.positionX + "vw";
    }
}

class Sprite {
    constructor() {
        this.sprite = null;
    }
    createSprite() {
        if (!this.sprite) {
            this.positionX = Math.floor(Math.random() * (72 - this.width + 1)) + 0;
            this.positionY = 62;

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
    fallDown() {
        if (this.positionY > 0 - this.height) {
            this.positionY--;
            this.sprite.style.bottom = this.positionY + "vh";
        }   
    }
}

class Cookie extends Sprite {
    constructor() {
        super();
        this.width = 4;
        this.height = 4;
        this.createSprite();
        this.sprite.classList.add("cookie");

        if (this.sprite) {
            this.sprite.style.width = this.width + "vw";
            this.sprite.style.height = this.height + "vh";

            this.sprite.style.backgroundImage = "url('./images/game.sprite.cookie.nobg.png')";
        }
        
        this.fallDown();
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

            this.sprite.style.backgroundImage = "url('./images/game.sprite.raindrop.nobg.png')";
        }

        this.fallDown();
    }
}

class Poop extends Sprite {
    constructor() {
        super();
        this.width = 15;
        this.height = 15;
        this.createSprite();
        this.sprite.classList.add("poop");

        if (this.sprite) {
            this.sprite.style.width = this.width + "vw";
            this.sprite.style.height = this.height + "vh";

            this.sprite.style.backgroundImage = "url('./images/game.sprite.poop.nobg.png')";
        }

        this.fallDown();
    }
}

class Hero extends Sprite {
    constructor() {
        super();
        this.width = 6;
        this.height = 10;
        this.createSprite();
        this.sprite.classList.add("hero");

        if (this.sprite) {
            this.sprite.style.width = this.width + "vw";
            this.sprite.style.height = this.height + "vh";

            this.sprite.style.backgroundImage = "url('./images/game.sprite.herocookie.nobg.png')";
        }

        this.fallDown();
    }
}