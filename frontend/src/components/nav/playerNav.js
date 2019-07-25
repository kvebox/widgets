import React from 'react';
import './players.css';
import Timer from '../game/timer';

class PlayerNav extends React.Component {

    render() {
        return (
            <div id='playersContainer'>
                <Timer />
                <div id='exitButton'>LEAVE ROOM</div>
            </div>
        );
    }
}

export default PlayerNav;