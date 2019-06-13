import React from 'react';
import './canvas.css';
import ToolBrush from './toolBrush';


class Toolbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toolType: '',
            modal: true
        };
        this.changeStrokeSize = this.changeStrokeSize.bind(this);
    }

    changeColor(color){
        this.props.changeColor(color);
    }

    changeStrokeSize(size){
        this.props.changeStrokeSize(size);
    }

    hideModal(){
        this.setState({modal: false});
    }

    componentDidMount(){
        document.addEventListener('click', this.hideModal);
    }

    componentDidUpdate(){
        document.removeEventListener('click', this.hideModal);
    }


    render() {
        return (
            <div id='canvasToolbarContainer'>
                {(this.state.modal) ? <ToolBrush 
                    lineWidth = {this.props.lineWidth}
                    changeStrokeSize={this.changeStrokeSize}/> : ''}

                <div id='tool_brushSize'>
                    <img onClick={() => this.props.returnToBrush()}className='toolIcon' src='/favicon.ico'/>
                </div>

                <div id='tool_eraserSize'>
                    <img onClick={() => this.props.changeColor('#fff')} className='toolIcon' src='/favicon.ico'/>
                </div>

                <div id='tool_undo'>
                    <img className='toolIcon' src='/favicon.ico'/>
                </div>

            </div>
        );
    }
}
export default Toolbar;