const player = new Player();

document.addEventListener("keydown", (e) => {
    switch (e.code) {
        case "ArrowLeft":
            player.moveLeft();
            break;
        case "ArrowRight":
            player.moveRight();
            break;
    }
});

function detectCollision(player, sprite) {

    if (player.positionX < sprite.positionX + sprite.width && player.positionX + player.width > sprite.positionX && player.positionY < sprite.positionY + sprite.height && player.positionY + player.height > sprite.positionY) {

        return true;
    }
    else {

        return false;
    }
};

const cookieArr = [];
const raindropArr = [];
const poopArr = [];
const heroArr = [];

function spawnSprite(spriteType) {

    if (spriteType === "cookie") {
        const cookie = new Cookie();
        cookieArr.push(cookie);
    }

    if (spriteType === "raindrop") {
        const raindrop = new Raindrop();
        raindropArr.push(raindrop);
    }

    if (spriteType === "poop") {
        const poop = new Poop();
        poopArr.push(poop);
    }

    if (spriteType === "hero") {
        const hero = new Hero();
        heroArr.push(hero);
    }
};

let scoreCount = 0;

const scoreTally = {
    pointsCookie: function () {
        scoreCount += 1;
    },
    pointsRaindrop: function () {
        scoreCount -= 1;
    },
    pointsPoop: function () {
        scoreCount -= 3;
    },
    pointsHero: function () {
        scoreCount += 5;
    }
};

let collisionCookie = false;
let collisionRaindrop = false;
let collisionPoop = false;
let collisionHero = false;

function fallSprite(spriteType) {

    if (spriteType === "cookie") {
        cookieArr.forEach((sprite) => {
            sprite.fallDown();

            if (detectCollision(player, sprite) && !collisionCookie) {
                sprite.sprite.remove();
                scoreTally.pointsCookie();
                document.getElementById("cookie-score").innerText = scoreCount;
                collisionCookie = true;
            }

            if (sprite.positionY === 5) {
                sprite.sprite.remove();
                collisionCookie = false;
            }
        })
    }

    if (spriteType === "raindrop") {
        raindropArr.forEach((sprite) => {
            sprite.fallDown();

            if (detectCollision(player, sprite) && !collisionRaindrop) {
                sprite.sprite.remove();
                scoreTally.pointsRaindrop();
                document.getElementById("cookie-score").innerText = scoreCount;
                collisionRaindrop = true;
            }

            if (sprite.positionY === 5) {
                sprite.sprite.remove();
                collisionRaindrop = false;
            }
        })
    }

    if (spriteType === "poop") {
        poopArr.forEach((sprite) => {
            sprite.fallDown();

            if (detectCollision(player, sprite) && !collisionPoop) {
                sprite.sprite.remove();
                scoreTally.pointsPoop();
                document.getElementById("cookie-score").innerText = scoreCount;
                collisionPoop = true;
            }

            if (sprite.positionY === 5) {
                sprite.sprite.remove();
                collisionPoop = false;
            }
        })
    }

    if (spriteType === "hero") {
        heroArr.forEach((sprite) => {
            sprite.fallDown();

            if (detectCollision(player, sprite) && !collisionHero) {
                sprite.sprite.remove();
                scoreTally.pointsHero();
                document.getElementById("cookie-score").innerText = scoreCount;
                collisionHero = true;
            }

            if (sprite.positionY === 5) {
                sprite.sprite.remove();
                collisionHero = false;
            }
        })
    }

    if (scoreCount >= 12) {
        location.assign("./gamewon.html");
    }
    else if (scoreCount < 0) {
        location.assign("./gameover.html");
    }
};

setInterval(function () {
    spawnSprite("cookie");
}, 3 * 1000);

setInterval(function () {
    spawnSprite("raindrop");
}, 600);

setInterval(function () {
    spawnSprite("poop");
}, 5 * 1000);

setInterval(function () {
    spawnSprite("hero");
}, 20 * 1000);


setInterval(function () {
    fallSprite("cookie");
}, 50);

setInterval(function () {
    fallSprite("raindrop");
}, 35);

setInterval(function () {
    fallSprite("poop");
}, 20);

setInterval(function () {
    fallSprite("hero");
}, 25);

document.getElementById("cookie-score").innerText = scoreCount;
