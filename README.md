# Paint 

## Background and Overview

A drawing app!

### Current Functionality
* Basic tools: draw, erase, eyedropper, clear
* Save + downloading of drawn images

### Future Functionality
* Extra tools: paint fill, undo, history save states 
* Layers + transparency

### Technologies and Technical Challenges
#### Technologies
* HTML/CSS/Javascript
    * HTML5 Canvas for drawing
* socket.io for realtime updates for messages, images, game
* MongoDB, Node.js, Express.js for saving/sharing images
* Webpack to bundle various scripts

#### Technical Challenges
* Tool states:
  * In order to both visually show which tool was un/selected/on-hover and limit functionality to their respective tools, switching states resulted in a lot of repeat code. This was circumvented through the use of 2 helper methods and specific file naming standards.
  #
  <img alt="Tool states gif" src="https://1.bp.blogspot.com/-cQ02zoBkqJ8/XS0kOnhzQZI/AAAAAAAABYo/te5E7kn9Ado74bfDmlUqFIy6yYPgRcH4gCLcBGAs/s1600/tool_states.gif">
  

```javascript
   changeImage(element, imageLink){
        let img = document.getElementById(`${element}`);
        img.setAttribute('src', imageLink);
    }

    setMode(mode){
        this.resetSelect();
        this.props.changeState(mode);
        this.setState({ mode: `${mode}` });
        this.changeImage(`tool_${mode}`, `/icons/tools_${mode}_select.png`);
    }

    <div >
        <img id='tool_draw' className='toolIcon' src='/icons/tools_draw.png'
            alt='brush'
            onMouseOver={(this.state.mode !== 'draw') ?
                () => this.changeImage('tool_draw', '/icons/tools_draw_hover.png')
                : function () {}}
            onMouseOut={
                (this.state.mode !== 'draw') ? () => this.changeImage('tool_draw', '/icons/tools_draw.png') : this.changeImage('tool_draw', '/icons/tools_draw_select.png')}
            onClick={() => {
                this.setMode('draw');
                this.props.returnToBrush()}} />
    </div>
```

