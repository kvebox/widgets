import React from 'react';
import Canvas from '../canvas/canvas';
import ChatBoard from '../chat/chatBoard';
import Game from '../game/game';
import './main.css';

class MainPage extends React.Component {

    render() {
        return (
            <div id='mainContainer'>
                <Game />
                <Canvas />
                <ChatBoard />
            </div>
        );
    }
}

export default MainPage;