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
    onKeyUp(event) {

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
    direction = "stop"
    pressedKeys = []
    constructor(x, y) {
        super(x, y, frontImage)
    }

    onKey(event) {
        print(event.code)
        switch (event.code) {
            case "KeyW":
                this.direction = "up"
                this.image = backImage
                break;
            case "KeyS":
                this.direction = "down"
                this.image = frontImage
                break;
            case "KeyD":
                this.direction = "right"
                this.image = rightImage
                break;
            case "KeyA":
                this.direction = "left"
                this.image = leftImage
                break;
        }
    }

    onKeyUp(event) {
        this.pressedKeys.splice(pressedKeys.indexOf(event.code), 1)
    }

    draw() {
        switch (this.direction) {
            case "up":
                this.y -= playerSpeed
                break
            case "down":
                this.y += playerSpeed
                break
            case "left":
                this.x -= playerSpeed
                break
            case "right":
                this.x += playerSpeed
                break
            
        }
        image(this.image, this.x - this.image.width/2, this.y - this.image.width)
    }
}