const player = new Player();
const cookieArr = [];
const raindropArr = [];
const poopArr = [];
const heroArr = [];

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

function spawnCookie() {
    const addCookie = new Cookie();
    cookieArr.push(addCookie);
}
function spawnRaindrop() {
    const addRaindrop = new Raindrop();
    raindropArr.push(addRaindrop);
}
function spawnPoop() {
    const addPoop = new Poop();
    poopArr.push(addPoop);
}
function spawnHero() {
    const addHero = new Hero();
    heroArr.push(addHero);
}

let cookieCounter = 1;
document.getElementById("cookie-score").innerText = cookieCounter;

function getCookie () {
    cookieCounter += 1;
    document.getElementById("cookie-score").innerText = cookieCounter;
}
function getRaindrop () {
    cookieCounter -= 1;
    document.getElementById("cookie-score").innerText = cookieCounter;

    if (cookieCounter === 0) {
        location.assign("./gameover.html")
    }
}
function getPoop () {
    cookieCounter -= 3;
    document.getElementById("cookie-score").innerText = cookieCounter;

    if (cookieCounter === 0) {
        location.assign("./gameover.html")
    }
}
function getHero () {
    cookieCounter += 4;
    document.getElementById("cookie-score").innerText = cookieCounter;
}


function despawnCookie() {
    cookieArr.forEach((addedSprite) => {
        addedSprite.fallDown();

        const collision = player.positionX < addedSprite.positionX + addedSprite.width && player.positionX + player.width > addedSprite.positionX && player.positionY < addedSprite.positionY + addedSprite.height && player.positionY + player.height > addedSprite.positionY;

        if (collision) {
            addedSprite.sprite.remove();
            cookieArr.splice(cookieArr.length);

            getCookie();
        }

        if (addedSprite.positionY === 5) {
            addedSprite.sprite.remove();
            cookieArr.splice(cookieArr.length);
        }
    })
}

function despawnRaindrop() {
    raindropArr.forEach((addedSprite) => {
        addedSprite.fallDown();

        const collision = player.positionX < addedSprite.positionX + addedSprite.width && player.positionX + player.width > addedSprite.positionX && player.positionY < addedSprite.positionY + addedSprite.height && player.positionY + player.height > addedSprite.positionY;

        if (collision) {
            addedSprite.sprite.remove();
            raindropArr.splice(raindropArr.length);
            
            getRaindrop();
        }

        if (addedSprite.positionY === 5) {
            addedSprite.sprite.remove();
            raindropArr.splice(raindropArr.length);
        }
    })
}

function despawnPoop() {
    poopArr.forEach((addedSprite) => {
        addedSprite.fallDown();

        const collision = player.positionX < addedSprite.positionX + addedSprite.width && player.positionX + player.width > addedSprite.positionX && player.positionY < addedSprite.positionY + addedSprite.height && player.positionY + player.height > addedSprite.positionY;

        if (collision) {
            addedSprite.sprite.remove();
            poopArr.splice(poopArr.length);
            
            getPoop();
        }

        if (addedSprite.positionY === 5) {
            addedSprite.sprite.remove();
            poopArr.splice(poopArr.length);
        }
    })
}

function despawnHero() {
    heroArr.forEach((addedSprite) => {
        addedSprite.fallDown();

        const collision = player.positionX < addedSprite.positionX + addedSprite.width && player.positionX + player.width > addedSprite.positionX && player.positionY < addedSprite.positionY + addedSprite.height && player.positionY + player.height > addedSprite.positionY;

        if (collision) {
            addedSprite.sprite.remove();
            heroArr.splice(heroArr.length);
            
            getHero();
        }

        if (addedSprite.positionY === 5) {
            addedSprite.sprite.remove();
            heroArr.splice(heroArr.length);
        }
    })
}

// control sprite spawn rate and frequency
const generateCookie = setInterval(spawnCookie, 3 * 1000);
const generateRaindrop = setInterval(spawnRaindrop, 1000);
const generatePoop = setInterval(spawnPoop, 5 * 1000);
const generateHero = setInterval(spawnHero, 20 * 1000);

// control sprite fall speed
const speedCookie = setInterval(despawnCookie, 50);
const speedRaindrop = setInterval(despawnRaindrop, 35);
const speedPoop = setInterval(despawnPoop, 20);
const speedHero = setInterval(despawnHero, 25);
