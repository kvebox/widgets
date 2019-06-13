import React from 'react';
import './canvas.css';
import Toolbar from './toolbar';
import ColorWheel from './colorWheel';
import {CANVAS_HEIGHT, CANVAS_WIDTH} from '../../constants';


class Canvas extends React.Component {
    constructor(props) {
        super(props);

        this.lastX = 0;
        this.lastY = 0;
    
        this.drawArea = React.createRef();

        // canvas drawing style
        this.state ={
            isDrawing: false,
            strokeStyle: `#000`,
            lineWidth: 10,
            lastDrawColor: '#000',
            history: [],
            height: CANVAS_HEIGHT,
            width: CANVAS_WIDTH
            // history2: []
        };

        // binding functions
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.draw = this.draw.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.changeStrokeSize = this.changeStrokeSize.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.returnToBrush = this.returnToBrush.bind(this);
        this.save = this.save.bind(this);
        this.undo = this.undo.bind(this);
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
        // this.setState({history : (ctx.save())});
        [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
        // console.log(ctx);
        }

    }

    changeColor(color){
        if (color !== '#fff'){
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
        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        // this.setState({ history2: this.state.history2.push(ctx.getImageData(0, 0, ctx.canvas.height, ctx.canvas.width))});
        let saved = ctx.save();
        console.log(ctx);
        console.log(saved);
        console.log(this.state.history);
        // console.log(saved);
        // console.log(ctx.restore());
        // return ctx.save();
    }

    undo(){
        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        let saved = ctx.restore(); 
        console.log(this.state.history);
    }

    clear(){
        const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    render() {
        return (
            <div >
                <div id='canvasLayout'>
                
                <Toolbar 
                    undo={this.undo}
                    save={this.save}
                    changeColor={this.changeColor}
                    changeStrokeSize={this.changeStrokeSize}
                    returnToBrush={this.returnToBrush}
                    lineWidth = {this.state.lineWidth}
                    clear = {this.clear}/>
                <canvas id='canvas'
                        ref={this.drawArea} 
                        height={`${this.state.height}`} 
                        width={`${this.state.width}`}/>
                <ColorWheel
                    changeColor={this.changeColor} />
                </div>
            </div>
        );
    }
}
export default Canvas;