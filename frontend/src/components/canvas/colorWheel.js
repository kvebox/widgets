import React from 'react';
import './canvas.css';
import {COLORS_HASH} from '../../constants';

class ColorWheel extends React.Component {
    constructor(props) {
        super(props);
        this.drawColorWheel = this.drawColorWheel.bind(this);
    }

    drawColorWheel() {
        let canvas = document.getElementById('colorWheel');
        let ctx = canvas.getContext('2d');
        for (let i = 0; i <= 12; i++){
            ctx.beginPath();
            let segment = 2*Math.PI/12;
            // in radians
            // arc path : (x, y, r, sAngle, eAngle, counterclockwise)
            ctx.fillStyle = COLORS_HASH[i];
            ctx.moveTo(100,75);
            ctx.arc(100, 75, 50, segment*i, segment*i+segment);
            ctx.lineTo(100,75);
            ctx.fill();
        }
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