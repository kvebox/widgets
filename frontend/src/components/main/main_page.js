import React from 'react';
import Canvas from '../canvas/canvas';
import ChatBoard from '../chat/chatBoard';
import PlayerNav from '../nav/playerNav';
import Game from '../game/game';
import './main.css';


class MainPage extends React.Component {

    render() {
        return (
            <div id='mainContainer'>
                <div id='mainContent'>
                    {/* <Game /> */}
                    <PlayerNav /> 
                    <div id="contentContainer">
                        <Canvas />
                        <ChatBoard />
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;