import React from 'react';
import './canvas.css';

class ColorWheel extends React.Component {
    constructor(props) {
        super(props);
        this.drawColorWheel = this.drawColorWheel.bind(this);
    }

    drawColorWheel() {
        let canvas = document.getElementById('colorWheel');
        let ctx = canvas.getContext('2d');
        let hue = 0;
        ctx.beginPath();
        // ctx.arc(100, 75, 50, 0, 2 * Math.PI);
        for (let i = 0; i <= 12; i++){
            let segment = 2*Math.PI/12;
            // in radians
            // arc path : (x, y, r, sAngle, eAngle, counterclockwise)
            ctx.strokeStyle = `hsl(${hue += 130}, 100%, 50%)`;
            ctx.moveTo(100,75);
            ctx.arc(100, 75, 50, segment*i, segment*i+segment);
            ctx.lineTo(100,75);
        }
        ctx.stroke();
    }

    componentDidMount(){
        this.drawColorWheel();
    }

    render() {
        return (
            <div id='colorCanvasHolder'>
                <canvas id='colorWheel' width='200' height='200'/>
            </div>
        )
    }
}

export default ColorWheel;