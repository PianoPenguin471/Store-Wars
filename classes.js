class GameElement {
    constructor(x, y) {
        this.pos = new p5.Vector(x, y)
        this.x = x
        this.y = y
    }

    onKey(event) {

    }
    onClick(event) {

    }
}
let tomatoImage
class Tomato extends GameElement {
    constructor (x, y, velX, velY) {
        super(x, y)
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
        image(tomatoImage, this.x - tomatoImage.width/2, this.y - tomatoImage.height/2)
    }
}

