import React, { useEffect, useRef } from 'react';
import './style.css';

export function Canvas(props) {

    const canvasRef = useRef(null)

    useEffect(() => {
        
        const racetrack = canvasRef.current
        const context = racetrack.getContext('2d') 


        class Circle {
            constructor(xpos, ypos, radius, color, speed) {
                this.xpos = xpos;
                this.ypos = ypos;
                this.radius = radius;
                this.color = color;
                this.speed = speed;
        
                this.dx = 1 * this.speed;
                this.dy = 1 * this.speed;
            }
        
            draw(context) {
                context.beginPath();
                context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false)
                context.stroke();
            }
        
            update() {
                context.clearRect(0, 0, 1000, 250)
                this.draw(context);
                
                if ( (this.xpos + this.radius) > 750){
                    this.dx = -this.dx;
                }
        
                if ( (this.xpos - this.radius) < 0 ){
                    this.dx = -this.dx
                }
                
                this.xpos += this.dx
        
            }
        }
        
        let circle1 = new Circle(26, 125, 25, "pink", 5);
        circle1.draw(context);
        
        let updateCircle = function() {
            requestAnimationFrame(updateCircle)
            circle1.update();
        }
        
        updateCircle();

    }, [])



    return (
        <>
            <canvas ref={canvasRef} {...props} id="racetrack"></canvas>

        </>
    )
}

// let racetrack = document.getElementById("myCanvas");
// const context = racetrack.getContext("2d");


