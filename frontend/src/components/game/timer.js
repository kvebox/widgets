import React from 'react';
import './game.css';

export default () => {
    return (
        <div id='roundInfoContainer'>
            <div id='stopwatch'>
                00:00s
            </div>
            <div id='round'>
                Round 1/5
            </div>
        </div>
    );
};