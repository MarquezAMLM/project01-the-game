const player = new Player();
const cookieArr = [];
const raindropArr = [];
const poopArr = [];

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

function despawnCookie() {
    cookieArr.forEach((addedSprite) => {
        addedSprite.fallDown();

        const collision = player.positionX < addedSprite.positionX + addedSprite.width && player.positionX + player.width > addedSprite.positionX && player.positionY < addedSprite.positionY + addedSprite.height && player.positionY + player.height > addedSprite.positionY;

        if (collision) {
            addedSprite.sprite.remove();
            cookieArr.splice(cookieArr.length);
            console.log("Cookies :)")
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
            console.log("Wet cookies :(")
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
            console.log("...dirty cookies :(")
        }

        if (addedSprite.positionY === 5) {
            addedSprite.sprite.remove();
            poopArr.splice(poopArr.length);
        }
    })
}

// control sprite spawn rate and frequency
const helloCookie = setInterval(spawnCookie, 1500);
const helloRaindrop = setInterval(spawnRaindrop, 1500);
const helloPoop = setInterval(spawnPoop, 1500);

// control sprite fall speed
const goodbyeCookie = setInterval(despawnCookie, 50);
const goodbyeRaindrop = setInterval(despawnRaindrop, 50);
const goodbyePoop = setInterval(despawnPoop, 50);



//const scoreboard = document.querySelector('#scoreboard');
//let inventory = document.querySelector('#cookieInventory');