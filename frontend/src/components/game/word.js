import React from 'react';
import './game.css';
import defaultFile from '../../input/default.txt';


class Word extends React.Component {
    constructor(props) {
        super(props);
        this.handleFiles = this.handleFiles.bind(this);
    }


    chooseWord(){
        
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

                <div id ='text'></div>
                <input id='fileInput' type='file' onChange={e => this.handleFiles(e)}/>

                <div id= 'output'></div>

            </div>
        );
    }
}
export default Word;
