import React from 'react';
import './chat.css';


class ChatBoard extends React.Component {
    // constructor(props) {
        // super(props);

    // }

    render() {
        return (
            <div id='chatBoardContainer'>
                <ul id='messages'></ul>
                <form action=''>
                    <input id='m' autoComplete='off'/>
                    <button>Send</button>
                </form>
            </div>
        );
    }
}
export default ChatBoard;