import React from 'react';
import './canvas.css';
import Toolbar from './toolbar';
import ColorWheel from './colorWheel';


class Canvas extends React.Component {
    constructor(props) {
        super(props);

        this.lastX = 0;
        this.lastY = 0;

        // this.canvas = document.getElementById('canvas');
        // this.ctx = this.canvas.getContext('2d');
        this.drawArea = React.createRef();
        this.state ={
            isDrawing: false,
            strokeStyle: `#000`,
            lineWidth: 10,
            lastDrawColor: '#000'
            // lines: Immutable.List(),
        };
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.draw = this.draw.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.changeStrokeSize = this.changeStrokeSize.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.returnToBrush = this.returnToBrush.bind(this);
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
        [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
        this.setState({ isDrawing: !this.state.isDrawing });
    }

    draw(e){
        if (this.state.isDrawing && this.drawArea.current.contains(e.target)) {
        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        ctx.strokeStyle = this.state.strokeStyle;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth = this.state.lineWidth;
        ctx.beginPath();
        ctx.moveTo(this.lastX, this.lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
        // console.log(ctx);
        }

    }

    changeColor(color){
        if (color != '#fff'){
            this.setState({lastDrawColor: color});
        }
        this.setState({strokeStyle: color});
    }

    returnToBrush(){
        this.setState({strokeStyle: this.state.lastDrawColor});
    }

    changeStrokeSize(size){
        this.setState({lineWidth: size});
    }

    save(){

    }

    clear(){
        const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    render() {
        return (
            <div >
                <ColorWheel
                    changeColor={this.changeColor}/>
                <Toolbar 
                    changeColor={this.changeColor}
                    changeStrokeSize={this.changeStrokeSize}
                    returnToBrush={this.returnToBrush}
                    lineWidth = {this.state.lineWidth}/>
                <canvas ref={this.drawArea} id='canvas' />
                <button onClick={() => this.save()}>Save</button>
                <button onClick={() => this.clear()}>Clear</button>
            </div>
        );
    }
}
export default Canvas;