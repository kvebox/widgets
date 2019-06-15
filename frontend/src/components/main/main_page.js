import React from 'react';
import Canvas from '../canvas/canvas';
import Word from '../game/word';

class MainPage extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <Word />
                </header>
                <Canvas />
                <footer>

                </footer>
            </div>
        );
    }
}

export default MainPage;