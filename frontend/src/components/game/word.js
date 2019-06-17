import React from 'react';
import './game.css';
import defaultFile from '../../input/default.txt';
import $ from 'jquery';


class Word extends React.Component {
    constructor(props) {
        super(props);
        this.handleFiles = this.handleFiles.bind(this);
        this.readDefault = this.readDefault.bind(this);

        this.word = '';
        this.list = React.createRef();

        this.state = {
            guess: ''
        };

        this.setupGame = this.setupGame.bind(this);
    }

    // resources for file reading: https://stackoverflow.com/questions/27522979/read-a-local-text-file-using-javascript

    readDefault(file){
        let rawFile = new XMLHttpRequest();
        let returnText = '';
        rawFile.open('GET', file, false);
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status === 0){ 
                    var allText = rawFile.responseText;
                    returnText = allText;
                }
            }
        };
        rawFile.send(null); 
        return returnText;
    }

    chooseWord(){
        let text = this.readDefault(defaultFile);
        let divided = text.split(/\n/g);
        return divided[(Math.floor(Math.random() * divided.length))];
    }

    // let players submit their own text files to play with
    handleFiles(e){
        let fileInput = document.getElementById('fileInput');
        // console.log(e.target[0]);
        var file = fileInput.files[0];
        var textType= /text.*/;

        if (file.type.match(textType)){
            var reader = new FileReader();

            reader.onload = function(e) {
                var content = reader.result;
                let textByLine = content.split('\n');
                return textByLine;
            };
            reader.readAsText(file);
        } else {
            alert('File not supported');
        }
    }

    componentDidMount(){
        // jQuery(React.findDOMNode(this.refs.list)).setupGame();
        this.setupGame();
    }

    setupGame(){
        let word = this.chooseWord();
        let list = document.getElementById('guessContainer');
    
        for (let i = 0; i < word.length; i++) {
            $(list).append($("<li>_</li>"));
        }
    }

    // game(){
    //     while (!this.win()){
    //         guess();
    //     }
    // }

    // win(){
    //     if (this.word === this.state.guess) {
    //         console.log('win');
    //         return true;
    //     } 
    //     return false;
    // }



    render() {
        return (
            <div id='gameContainer'>
                {this.setupGame()}
                <div id ='text'></div>
                <p>a;kldsjf;alksjdf;lakjs</p>
                <ul ref={this.list} id='guessContainer'>
                    <li>test</li>

                </ul>
                {/* <input id='fileInput' type='file' onChange={e => this.handleFiles(e)}/> */}

            </div>
        );
    }
}
export default Word;
