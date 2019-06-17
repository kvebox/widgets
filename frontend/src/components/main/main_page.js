import React from 'react';
import Canvas from '../canvas/canvas';
import Word from '../game/word';
import './main.css';

class MainPage extends React.Component {

    render() {
        return (
            <div id='mainContainer'>
                <Word />
                <Canvas />
            </div>
        );
    }
}

export default MainPage;