import React from 'react';
import Canvas from '../canvas/canvas';
import ChatBoard from '../chat/chatBoard';
import PlayerNav from '../nav/playerNav';
import Game from '../game/game';
import HeaderNav from '../nav/headerNav';
import './main.css';


class MainPage extends React.Component {

    render() {
        return (<>
            <div id='mainContainer'>
                {/* <div id='filler'></div> */}
                {/* <div id='navContentContainer'> */}
                {/* <PlayerNav />  */}
                {/* <div id='navContent'> */}
                    {/* <HeaderNav /> */}
                    <div id='mainContent'>
                        <div id="contentContainer">
                            <Game />
                            <Canvas />
                        </div>
                        <ChatBoard />
                    </div>
                {/* </div>
            </div> */}
            </div>
            </>
        );
    }
}

export default MainPage;