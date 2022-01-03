class Projectile {
    constructor (x, y, velX, velY, size) {
        this.pos = new p5.Vector(x, y)
        this.x = x
        this.y = y
        this.velX = velX
        this.velY = velY
        this.size = size
    }
    updatePosition() {
        this.x += this.velX
        this.y += this.velY
    }
    /** This function redraws the sketch multiple times a second. */
    draw() {
        fill(250, 0, 0)
        ellipse(this.x, this.y, this.size)
    }
    
}

class Tomato extends Projectile {
    constructor (x, y, velX, velY) {
        super(x, y, velX, velY, 20)
        this.image = loadImage("tomato.png")
    }

    draw() {
        image(this.image, x - this.image.width/2, y - this.image.height/2)
    }
}