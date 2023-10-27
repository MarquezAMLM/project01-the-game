console.log("testing main.js");

const player = new Player();
const spriteRaindrop = new Sprite();
const spriteArr = [];

// spawn
function helloSprite() {
    const addSprite = new Sprite();
    spriteArr.push(addSprite);
}
let spawnSprite = setInterval(helloSprite, 1500);

// despawn
function goodbyeSprite() {
    spriteArr.forEach((addedSprite) => {
        addedSprite.fallDown();

        if (player.positionX < addedSprite.positionX + addedSprite.width && player.positionX + player.width > addedSprite.positionX && player.positionY < addedSprite.positionY + addedSprite.height && player.positionY + player.height > addedSprite.positionY || addedSprite.positionY === 1 - addedSprite.height) {
            console.log("Collision!");
            addedSprite.sprite.remove();
            spriteArr.shift();
        } 
    });
}
let despawnSprite = setInterval(goodbyeSprite, 50);

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