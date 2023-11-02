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

const cookieArr = [];
const raindropArr = [];
const poopArr = [];
const heroArr = [];

const counterArr = [];
let cookieCounter = 0;
let raindropCounter = 0;
let poopCounter = 0;
let heroCounter = 0;

function spawnCookie() {
    const addCookie = new Cookie();
    cookieArr.push(addCookie);
}
function cookieCount() {
    counterArr.push(1);
    let scoreCount = 1 + (counterArr.length - counterArr.length);

    if (scoreCount <= 0) {
        location.assign("./gameover.html");
    }

    return scoreCount;
}
function operationCookie() {
    cookieArr.forEach((addedSprite) => {
        addedSprite.fallDown();
           
        const collision = player.positionX < addedSprite.positionX + addedSprite.width && player.positionX + player.width > addedSprite.positionX && player.positionY < addedSprite.positionY + addedSprite.height && player.positionY + player.height > addedSprite.positionY;
            
        if (collision) {
            addedSprite.sprite.remove();
            cookieArr.splice(cookieArr.length);
            
            cookieCounter = cookieCount();
            document.getElementById("cookie-score").innerText = cookieCounter;
        }
    
        if (addedSprite.positionY === 5) {
            addedSprite.sprite.remove();
            cookieArr.splice(cookieArr.length);
        }
    })
}


function spawnRaindrop() {
    const addRaindrop = new Raindrop();
    raindropArr.push(addRaindrop);
}
function raindropCount() {
    counterArr.pop();
    const scoreCount = counterArr.length;

    if (scoreCount <= 0) {
        location.assign("./gameover.html");
    }

    return scoreCount;
}
function operationRaindrop() {
    raindropArr.forEach((addedSprite) => {
        addedSprite.fallDown();

        const collision = player.positionX < addedSprite.positionX + addedSprite.width && player.positionX + player.width > addedSprite.positionX && player.positionY < addedSprite.positionY + addedSprite.height && player.positionY + player.height > addedSprite.positionY;

        if (collision) {
            addedSprite.sprite.remove();
            raindropArr.splice(raindropArr.length);
            
            raindropCounter = raindropCount();
            document.getElementById("cookie-score").innerText = raindropCounter;
        }

        if (addedSprite.positionY === 5) {
            addedSprite.sprite.remove();
            raindropArr.splice(raindropArr.length);
        }
    })
}


function spawnPoop() {
    const addPoop = new Poop();
    poopArr.push(addPoop);
}
function poopCount() {
    counterArr.splice(counterArr.length - 3, 3);
    const scoreCount = counterArr.length;

    if (scoreCount <= 0) {
        location.assign("./gameover.html");
    }

    return scoreCount;
}
function operationPoop() {
    poopArr.forEach((addedSprite) => {
        addedSprite.fallDown();

        const collision = player.positionX < addedSprite.positionX + addedSprite.width && player.positionX + player.width > addedSprite.positionX && player.positionY < addedSprite.positionY + addedSprite.height && player.positionY + player.height > addedSprite.positionY;

        if (collision) {
            addedSprite.sprite.remove();
            poopArr.splice(poopArr.length);
            
            poopCounter = poopCount();
            document.getElementById("cookie-score").innerText = poopCounter;
        }

        if (addedSprite.positionY === 5) {
            addedSprite.sprite.remove();
            poopArr.splice(poopArr.length);
        }
    })
}


function spawnHero() {
    const addHero = new Hero();
    heroArr.push(addHero);
}
function heroCount() {
    counterArr.push(1, 1, 1, 1);
    const scoreCount = counterArr.length;

    if (scoreCount <= 0) {
        location.assign("./gameover.html");
    }

    return scoreCount;
}
function operationHero() {
    heroArr.forEach((addedSprite) => {
        addedSprite.fallDown();

        const collision = player.positionX < addedSprite.positionX + addedSprite.width && player.positionX + player.width > addedSprite.positionX && player.positionY < addedSprite.positionY + addedSprite.height && player.positionY + player.height > addedSprite.positionY;

        if (collision) {
            addedSprite.sprite.remove();
            heroArr.splice(heroArr.length);
            
            heroCounter = heroCount();
            document.getElementById("cookie-score").innerText = heroCounter;
        }

        if (addedSprite.positionY === 5) {
            addedSprite.sprite.remove();
            heroArr.splice(heroArr.length);
        }
    })
}

document.getElementById("cookie-score").innerText = counterArr.length;

// control sprite spawn rate and frequency
const generateCookie = setInterval(spawnCookie, 3 * 1000);
const generateRaindrop = setInterval(spawnRaindrop, 1000);
const generatePoop = setInterval(spawnPoop, 5 * 1000);
const generateHero = setInterval(spawnHero, 3 * 1000); // set to 20 * 1000

// control sprite fall speed
const speedCookie = setInterval(operationCookie, 50);
const speedRaindrop = setInterval(operationRaindrop, 35);
const speedPoop = setInterval(operationPoop, 20);
const speedHero = setInterval(operationHero, 25);