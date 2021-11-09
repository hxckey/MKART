const canvas = document.getElementById("mycanvas");
const context = canvas.getContext("2d");

// const height = window.innerHeight;
// const width = window.innerWidth;

class Circle {
    constructor(xpos, ypos, radius, color) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = color;
    }

    draw(context) {
        context.beginPath();
        context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false)
        context.stroke();
    }
}

let circle1 = new Circle(100, 100, 50, "pink");
circle1.draw(context);