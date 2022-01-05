class GameElement {
    constructor(x, y, image) {
        this.pos = new p5.Vector(x, y)
        this.x = x
        this.y = y
        this.image = image
    }

    onKey(event) {

    }
    onClick(event) {

    }
}

class Tomato extends GameElement {
    constructor (x, y, velX, velY) {
        super(x, y, tomatoImage)
        this.velX = velX
        this.velY = velY
    }
    updatePosition() {
        this.x += this.velX
        this.y += this.velY
        //this.pos.x = this.x
        //this.y = this.pos.y
    }
    draw() {
        image(this.image, this.x - this.image.width/2, this.y - this.image.height/2)
    }
}

class Player extends GameElement {
    constructor(x, y) {
        super(x, y, frontImage)
    }
    if (pressedKeys.includes("KeyA")) {
        x -= playerSpeed
    }
    if (pressedKeys.includes("KeyW")) {
        y -= playerSpeed
    }
    if (pressedKeys.includes("KeyS")) {
        y += playerSpeed
    }
    if (pressedKeys.includes("KeyD")) {
        x += playerSpeed
    }
}