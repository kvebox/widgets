import React from 'react';
import Canvas from '../canvas/canvas';

class MainPage extends React.Component {

    render() {
        return (
            <div>
                <h1>A Twitter Clone</h1>
                <Canvas />
                <footer>
                    Copyright &copy; 2019 Chirper
                </footer>
            </div>
        );
    }
}

export default MainPage;