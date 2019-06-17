import React from 'react';
import './game.css';
import defaultFile from '../../input/default.txt';


class Word extends React.Component {
    constructor(props) {
        super(props);
        this.handleFiles = this.handleFiles.bind(this);
    }


    readDefault(file){
        let rawFile = new XMLHttpRequest();
        rawFile.open('GET', file, false);
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status == 0){ 
                    var allText = rawFile.responseText;
                    console.log(allText);
                }
            }
        };
        rawFile.send(null);
        
    }

    handleFiles(e){
        let fileInput = document.getElementById('fileInput');
        // console.log(e.target[0]);
        var file = fileInput.files[0];
        var textType= /text.*/;
        console.log(file);


        // if (file.type.match(textType)){
        //     var reader = new FileReader();

        //     reader.onload = function(e) {
        //         var content = reader.result;
        //         let textByLine = content.split('\n');
        //         alert(textByLine);
        //     }
        //     reader.readAsText(file);
        // } else {
        //     alert('File not supported');
        // }
    }




    render() {
        return (
            <div>
                {this.readDefault(defaultFile)}
                <div id ='text'></div>
                <input id='fileInput' type='file' onChange={e => this.handleFiles(e)}/>

                <div id= 'output'></div>

            </div>
        );
    }
}
export default Word;
