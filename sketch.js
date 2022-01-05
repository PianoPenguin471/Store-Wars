let tomatoes = []
let pressedKeys = []
var today = new Date()
var isWinter = today.getMonth() <= 4
let centerX = innerWidth/2
let centerY = innerHeight/2
let frontImage, backImage, leftImage, rightImage;
const playerSpeed = 2
const tomatoSpeed = 3
var player, tomatoImage

function preload() {
    var characterName = isWinter ? "barry" : "bobert"
    frontImage = loadImage(`assets/${characterName}-front.png`);
    backImage = loadImage(`assets/${characterName}-back.png`);
    leftImage = loadImage(`assets/${characterName}-left.png`);
    rightImage = loadImage(`assets/${characterName}-right.png`);
    player = new Player(centerX, centerY)
    print(player)
    tomatoImage = loadImage("assets/tomato.png");
}

/** This function sets up the sketch. */
function setup() {
    createCanvas(innerWidth - 30, innerHeight - 30);
    frameRate(60);
}

function fireTomato() {
    direction = new p5.Vector(mouseX - player.x, mouseY - player.y).normalize().mult(tomatoSpeed)
    tomatoes.push(new Tomato(player.x, player.y, direction.x, direction.y))
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
    player.draw()
}

/**
 * This function is called when the mouse is pressed.
 * @param {MouseEvent} event - The `MouseEvent` that is passed as an argument.
 */
function mousePressed(event) {
    console.log("Clicked")
    fireTomato()
    player.onClick(event)
}

/**
 * This function is called when the mouse is released.
 * @param {MouseEvent} event - The `MouseEvent` that is passed as an argument.
 */
function mouseReleased(event) {
}

function keyPressed(event) {
    pressedKeys.push(event.code)
    if (event.code === "Space") {
        fireTomato()
    }
    player.onKey(event)
}

function keyReleased(event) {
    player.onKeyUp(event)
}