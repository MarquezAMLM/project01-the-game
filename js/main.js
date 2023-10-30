console.log("testing main.js");

const player = new Player();
const spriteArr = [];

function helloSprite() {
    const addRaindrop = new Raindrop();
    const addCookie = new Cookie();
    const addPoop = new Poop();
    const addHero = new Hero();
    spriteArr.push(addRaindrop, addCookie, addPoop, addHero);
}
const spawnSprite = setInterval(helloSprite, 1500);

function goodbyeSprite() {
    spriteArr.forEach((addedSprite) => {
        addedSprite.fallDown();

        if (player.positionX < addedSprite.positionX + addedSprite.width && player.positionX + player.width > addedSprite.positionX && player.positionY < addedSprite.positionY + addedSprite.height && player.positionY + player.height > addedSprite.positionY) {
            console.log("Collision!");
            addedSprite.sprite.remove();
            spriteArr.splice(spriteArr.length);
        }

        if (addedSprite.positionY === -1) {
            console.log("On the floor!");
            addedSprite.sprite.remove();
            spriteArr.splice(spriteArr.length);
        }
    });
}
const despawnSprite = setInterval(goodbyeSprite, 50);

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