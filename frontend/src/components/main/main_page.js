import React from 'react';
import Canvas from '../canvas/canvas';
import Game from '../game/game';
import './main.css';

class MainPage extends React.Component {

    render() {
        return (
            <div id='mainContainer'>
                <Game />
                <Canvas />
            </div>
        );
    }
}

export default MainPage;