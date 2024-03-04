class Player {
    constructor() {
        this.width = 5;
        this.height = 10;
        this.positionX = 40 - (this.width / 2);
        this.positionY = 5;

        this.playBoard = document.getElementById("board");
        const playBoardWidthPercentage = 90;
        this.minX = 0;
        this.maxX = (playBoardWidthPercentage - (this.width / window.innerWidth) * 100) * window.innerWidth;

        this.playerElement = document.getElementById("player");
        this.playerElement.style.width = this.width + "vw";
        this.playerElement.style.height = this.height + "vh";
        this.playerElement.style.left = this.positionX + "vw";
        this.playerElement.style.bottom = this.positionY + "vh";

        this.playerElement.style.backgroundImage = "url('./images/sprite-player-right.png')";
    }
    moveLeft() {
        if (this.positionX > this.minX) {
            this.playerElement.style.backgroundImage = "url('./images/sprite-player-left.png')";
            this.positionX -= 3;
            this.playerElement.style.left = this.positionX + "vw";
        }
    }
    moveRight() {
        if (this.positionX < this.maxX) {
            this.playerElement.style.backgroundImage = "url('./images/sprite-player-right.png')";
            this.positionX += 3;
            this.playerElement.style.left = this.positionX + "vw";
        }
    }
};

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
};

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

            this.sprite.style.backgroundImage = "url('./images/sprite-cookie.png')";
        }

        this.fallDown();
    }
};

class Raindrop extends Sprite {
    constructor() {
        super();
        this.width = 1;
        this.height = 3;
        this.createSprite();
        this.sprite.classList.add("raindrop");

        if (this.sprite) {
            this.sprite.style.width = this.width + "vw";
            this.sprite.style.height = this.height + "vh";

            this.sprite.style.backgroundImage = "url('./images/sprite-raindrop.png')";
        }

        this.fallDown();
    }
};

class Poop extends Sprite {
    constructor() {
        super();
        this.width = 10;
        this.height = 10;
        this.createSprite();
        this.sprite.classList.add("poop");

        if (this.sprite) {
            this.sprite.style.width = this.width + "vw";
            this.sprite.style.height = this.height + "vh";

            this.sprite.style.backgroundImage = "url('./images/sprite-poop.png')";
        }

        this.fallDown();
    }
};

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

            this.sprite.style.backgroundImage = "url('./images/sprite-hero.png')";
        }

        this.fallDown();
    }
};