import * as THREE from "./three.module.js"
import {GLTFLoader} from "./GLTFLoader.js"
import { OrbitControls } from "./OrbitControls.js";

let canvas, ID_home, glb_loader
let scene, camera, renderer, controls;

async function init() {
    // độ rộng khung hình chứa
    const sizes = {
        width: 500,
        height: 500, 
    }
    if (window.innerWidth <739) {
        sizes.width = 300
        sizes.height = 200
    } else if (window.innerWidth>=739 && window.innerWidth<1239){
        sizes.width = 450
        sizes.height = 450
    }
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x9a9a9a);

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
    await loader.load(glb_loader, function(glb){
        // console.log(glb)
        ///////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////
        document.getElementById("hiden-loading").style.display = "none";
        ///////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////
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
    if ($("._3dHome").length){
        ID_home = '._3dHome'
        glb_loader = 'render3D/3D/4 tram dau.glb'
        canvas = document.querySelector(ID_home)
        init();
    }
});
