import * as THREE from "./three.module.js"
import {GLTFLoader} from "./GLTFLoader.js"
import { OrbitControls } from "./OrbitControls.js";

let canvas, ID_home, glb_loader
let scene, camera, renderer, controls;
canvas = document.querySelector("._3dHome")
async function init() {
    // độ rộng khung hình chứa
    var sizes = {
        width: 1500,
        height: 1100, 
    }
    if ( (window.innerWidth >= 0) && (window.innerWidth < 388) ){
        sizes.width = 269
        sizes.height = 250
    } else if ( (window.innerWidth >= 388) && (window.innerWidth < 460) ) {
        sizes.width = 300
        sizes.height = 250
    } else if ( (window.innerWidth >= 460) && (window.innerWidth < 739) ) {
        sizes.width = 350
        sizes.height = 300
    } else if ( (window.innerWidth >= 739) && (window.innerWidth < 1024) ) {
        sizes.width = 550
        sizes.height = 650
    } else if ( (window.innerWidth >= 1024) && (window.innerWidth < 1239) ) {
        sizes.width = 800
        sizes.height = 690
    } else if ( (window.innerWidth >= 1239) && (window.innerWidth < 1330) ){
        sizes.width = 1000
        sizes.height = 690
    } else if ( (window.innerWidth >= 1330) && (window.innerWidth < 1450) ){
        sizes.width = 1000
        sizes.height = 690
    } else if ((window.innerWidth >= 1450)){
        sizes.width = 1200
        sizes.height = 800
    } 
    // console.log( window.innerWidth)
    // console.log(sizes.width)
    // console.log(sizes.height)

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x9a9a9a);
    // scene.background = new THREE.Color(0xffffff);


    // gần xa camera
    camera = new THREE.PerspectiveCamera(88, sizes.width/sizes.height, 0.1, 10)
    //vị trí camera
    camera.position.x = 2;
    camera.position.y = 2;
    camera.position.z = 1;
    scene.add(camera)
    
    controls = new OrbitControls(camera,canvas);
    controls.addEventListener('change', renderer);

    const light2 = new THREE.DirectionalLight(0xffffff, 0.8)
    light2.position.set(0,500,0)
    scene.add(light2)
    const light5 = new THREE.DirectionalLight(0xffffff, 0.5)
    light5.position.set(0,0,-500)
    scene.add(light5)
    const light6 = new THREE.DirectionalLight(0xffffff, 0.5)
    light6.position.set(0,0,500)
    scene.add(light6)
    const light1 = new THREE.DirectionalLight(0xffffff, 0.5)
    light1.position.set(500,0,0)
    scene.add(light1)

    // renderer = new THREE.WebGLRenderer({antialias:true});
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
    }) 
    // renderer.setSize(window.innerWidth,window.innerHeight);
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) // liên quan đến chi tiết vật
    renderer.shadowMap.enabled = true
    renderer.gammaOutput = true
    // document.body.appendChild(renderer.domElement);  //renderer = new THREE.WebGLRenderer({antialias:true});

    let loader = new GLTFLoader();
    let _4Tram
    await loader.load("render3D/3D/3 tram dau.glb", function(glb){
                ///////////////////////////////////////////////////////////////////////////////////////
                ///////////////////////////////////////////////////////////////////////////////////////
                document.getElementById("hiden-loading").style.display = "none";
                ///////////////////////////////////////////////////////////////////////////////////////
                ///////////////////////////////////////////////////////////////////////////////////////
        // console.log(glb)
        _4Tram = glb.scene;
        // tỉ lệ
        _4Tram.scale.set(3,3,3);
        // vị trí vật
        _4Tram.position.x = 0;
        _4Tram.position.y = -1.5;
        _4Tram.position.z = 1.2;
        scene.add(glb.scene);
    });
    animate();
}
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
    // required if controls.enableDamping or controls.autoRotate are set to true
    // controls.update()
}
$(document).ready(function() {
    init();
});
