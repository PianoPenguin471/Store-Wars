let tomatoes = []
let pressedKeys = []
let centerX = innerWidth/2
let centerY = innerHeight/2
let playerPos, frontImage;
const playerSpeed = 2
const tomatoSpeed = 3

/** This function sets up the sketch. */
function setup() {
    createCanvas(innerWidth, innerHeight);
    frameRate(60);
    frontImage = loadImage("bobert-front.png");
    playerPos = new p5.Vector(centerX, centerY)
}

function fireTomato() {
    direction = new p5.Vector(mouseX - playerPos.x, mouseY - playerPos.y).normalize().mult(tomatoSpeed)
    tomatoes.push(new Projectile(playerPos.x, playerPos.y, direction.x, direction.y, 20))
}

/** This function redraws the sketch multiple times a second. */
function draw() {
    background(255, 205, 250)
    for (var i = 0; i < tomatoes.length; i ++) {
        let tomato = tomatoes[i]
        if (tomato.x > innerWidth || tomato.x < 0 || tomato.y > innerHeight || tomato.y < 0) {
            tomatoes.splice(i, 1)
            continue
        }
        tomato.updatePosition()
        tomato.draw()
    }
    image(frontImage, playerPos.x - frontImage.width/2, playerPos.y-frontImage.height/2)
    if (pressedKeys.includes("KeyA")) {
        playerPos.x -= playerSpeed
    }
    if (pressedKeys.includes("KeyW")) {
        playerPos.y -= playerSpeed
    }
    if (pressedKeys.includes("KeyS")) {
        playerPos.y += playerSpeed
    }
    if (pressedKeys.includes("KeyD")) {
        playerPos.x += playerSpeed
    }

}

/**
 * This function is called when the mouse is pressed.
 * @param {MouseEvent} event - The `MouseEvent` that is passed as an argument.
 */
function mousePressed(event) {
    console.log("Clicked")
    fireTomato()
}

/**
 * This function is called when the mouse is released.
 * @param {MouseEvent} event - The `MouseEvent` that is passed as an argument.
 */
function mouseReleased(event) {
}

function keyPressed(event) {
    console.log(event.code)
    pressedKeys.push(event.code)
}

function keyReleased(event) {
    pressedKeys.splice(pressedKeys.indexOf(event.code), 1)
}