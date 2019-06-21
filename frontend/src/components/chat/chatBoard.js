import React from 'react';
import './chat.css';
import socketIOClient from 'socket.io-client';
import $ from 'jquery';



class ChatBoard extends React.Component {
    constructor() {
        super();
        this.state = {
            endpoint: "localhost:4001",
            message: ''
        };
        this.sendMessages = this.sendMessages.bind(this);
    }


    sendMessages(e) {
        const socket = socketIOClient(this.state.endpoint);
        socket.emit('chat message', $('#m').val());
        $('#m').val('');


        socket.on('chat message', function (msg) {
            $('#messages').append($('<li>').text(msg));
        });

    }

    handleUpdate(e) {
        this.setState({ message: e.target.value });
    }


    scrollToBottom() {
        this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
    }


    render() {

        return (
            <div className='chatBoardContainer'>
                <div className='messagesContainer'>
                    <ul id='messages' className='messages'></ul>
                    <div ref={(el) => { this.messagesEnd = el; }}></div>
                </div>

                <form className='messagesForm' action=''
                    onSubmit={e => {this.sendMessages(e)
                                    this.scrollToBottom()}}>
                    <input className='m' id='m'
                        autoComplete='off'
                        onChange={e => this.handleUpdate(e)}
                        placeholder='Type your guess here..'
                    />
                    <button className='sendButton'>Send</button>
                </form>
            </div>

        )
    }
}
export default ChatBoard;