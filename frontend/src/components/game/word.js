import React from 'react';
import './game.css';
import defaultFile from '../../input/default.txt';


class Word extends React.Component {
    constructor(props) {
        super(props);
        this.handleFiles = this.handleFiles.bind(this);
    }

    handleFiles(e){
            var input = e.target;

            var reader = new FileReader();
            reader.onload = function() {
                var text = reader.result;
                var node = document.getElementById('text');
                node.innerText = text;
                console.log(reader.result.substring(0,5) );
            };
            // reader.readAsText(input.files[0]);

    }


    render() {
        return (
            <div>
                {this.handleFiles(defaultFile)}
                <div id ='text'></div>
                <input type='file' accept='text/plain' onChange={(e) => this.handleFiles(e)} />
                <div id= 'output'></div>

            </div>
        );
    }
}
export default Word;
