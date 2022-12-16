class GameElement {
    constructor(x, y, image) {
        this.pos = new p5.Vector(x, y)
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
        this.pos.x += this.velX
        this.pos.y += this.velY
        //this.pos.x = this.x
        //this.y = this.pos.y
    }
    draw() {
        image(this.image, this.pos.x - this.image.width/2, this.pos.y - this.image.height/2)
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
                this.pos.y-= playerSpeed
                break
            case "down":
                this.pos.y += playerSpeed
                break
            case "left":
                this.pos.x -= playerSpeed
                break
            case "right":
                this.pos.x += playerSpeed
                break
            
        }
        image(this.image, this.pos.x - this.image.width/2, this.pos.y, this.image.width)
    }
}

class Wall extends GameElement {
    constructor(x, y, width, height) {
        super(x, y, null)
        this.width = width
        this.height = height;
    }
    draw() {
        rect(this.pos.x, this.pos.y, this.width, this.height)
    }
}