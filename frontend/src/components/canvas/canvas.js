import React from 'react';
import * as THREE from 'three';

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// var geometry = new THREE.BoxGeometry(1, 1, 1);
// var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// var cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;

// function animate() {
//     requestAnimationFrame(animate);
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
//     renderer.render(scene, camera);
// }
// animate();

// class Canvas extends React.Component {

    
//     render() {
//         return (
//             <div>
  
//             </div>
//         )
//     }

// }

// export default Canvas;


var OrbitControls = require("three-orbit-controls")(THREE);
class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.animate = this.animate.bind(this);
        this.addCube = this.addCube.bind(this);
        this.initializeCamera = this.initializeCamera.bind(this);
        this.initializeOrbits = this.initializeOrbits.bind(this);
    }

    addCube(cube) {
        this.scene.add(cube);
    }
    componentDidMount() {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.renderer.setSize(width, height);
        this.mount.appendChild(this.renderer.domElement);
        this.initializeOrbits();
        this.initializeCamera();

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0xFF00FF });
        let cube = new THREE.Mesh(geometry, material);
        this.scene.add(cube);
        this.animate();
    }
    componentWillUnmount() {
        cancelAnimationFrame(this.frameId);
        this.mount.removeChild(this.renderer.domElement);
    }
    initializeOrbits() {
        this.controls.rotateSpeed = 1.0;
        this.controls.zoomSpeed = 1.2;
        this.controls.panSpeed = 0.8;
    }
    initializeCamera() {
        this.camera.position.x = 0;
        this.camera.position.y = 0;
        this.camera.position.z = 4;
    }
    animate(cube) {
        this.frameId = window.requestAnimationFrame(this.animate);

        this.renderer.render(this.scene, this.camera);
        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;
    }

    render() {
        return (
            <div>
                <div
                    id="boardCanvas"
                    style={{ width: "80vw", height: "40vw" }}
                    ref={mount => {
                        this.mount = mount;
                    }}
                />
            </div>
        );
    }
}
export default Canvas;