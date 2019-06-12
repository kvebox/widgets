import React from 'react';
import './canvas.css';



class Canvas extends React.Component {
    constructor(props) {
        super(props);

        this.lastX = 0;
        this.lastY = 0;

        // this.canvas = document.getElementById('canvas');
        // this.ctx = this.canvas.getContext('2d');
        this.drawArea = React.createRef;
        this.state ={
            isDrawing: false,
            // lines: Immutable.List(),
        };
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.draw = this.draw.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }

 
    componentDidMount(){
        document.addEventListener('mousedown', this.handleMouseDown);
        document.addEventListener('mousemove', this.draw);
    }

    
    componentDidUpdate(){
        document.addEventListener('mouseup', this.handleMouseUp);
    }
    
    handleMouseUp() {
        this.setState({isDrawing: false});
    }

    handleMouseDown(e) {
        [this.lastX, this.lastY] = [e.offsetX, e.offsetY]
        this.setState({ isDrawing: !this.state.isDrawing });
    }

    draw(e){
        if (this.state.isDrawing) {
        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        ctx.strokeStyle = '#BADA55';
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.moveTo(this.lastX, this.lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
        }
    }





    render() {
        return (
            <div >
                <canvas ref={this.drawArea} id='canvas' />
            </div>
        );
    }
}
export default Canvas;