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
        this.socket = socketIOClient(this.state.endpoint);
        this.sendMessages = this.sendMessages.bind(this);
    }

    componentDidMount(){
        this.socket.on('chat message', (msg) => {
            $('#messages').append($('<li>').text(msg));
        });
    }

    componentWillUnmount(){
        this.socket.off('chat message');
    }

    componentDidUpdate(){
        this.scrollToBottom();
    }


    sendMessages(e) {
        e.preventDefault();
        this.socket.emit('chat message', $('#m').val());
        $('#messages').append($('<li>').text($('#m').val()));
        $('#m').val('');
        // this.setState({message: ''});
        
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