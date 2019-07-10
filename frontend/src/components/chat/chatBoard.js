import React from 'react';
import './chat.css';
import socketIOClient from 'socket.io-client';
import $ from 'jquery';



class ChatBoard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            endpoint: 'localhost:4001',
            message: ''
        };
        this.sendMessages = this.sendMessages.bind(this);
    }


    sendMessages(e) {
        // if (!this.state.message) return;

        // this.props.onSendMessage(this.state.input, (err) => {
        //     if (err) return console.error(err);
        //     return this.setState({message: ''});
        // });
        e.preventDefault();
        const socket = socketIOClient(this.state.endpoint);
        socket.emit('chat message', this.state.message);
        // socket.emit('chat message', this.state.message);
        $('#m').val('');
        // this.setState({message: ''});

        socket.on('chat message', (msg) => {
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
        // console.log(this.state.chatHistory);
        return (
            <div className='chatBoardContainer'>
                <div className='messagesContainer'>
                    <ul id='messages' className='messages'>
                        {this.state.chatHistory}
                    </ul>
                    <div ref={(el) => { this.messagesEnd = el; }}></div>
                </div>

                <form className='messagesForm' action=''
                    onSubmit={e => {this.sendMessages(e)
                                    this.scrollToBottom()
                                    }}>
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