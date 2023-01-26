import * as THREE from "./three.module.js"
import {GLTFLoader} from "./GLTFLoader.js"
import { OrbitControls } from "./OrbitControls.js";

let canvas, ID_home, glb_loader
let scene, camera, renderer, controls;
const element = document.getElementById("_3dTram3_HW");
function init() {
    // độ rộng khung hình chứa
    var sizes = {
        width: element.clientWidth,
        height: element.clientWidth
    }

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x9a9a9a);

    // gần xa camera
    camera = new THREE.PerspectiveCamera(60, sizes.width/sizes.height, 0.1, 10)
    //vị trí camera
    camera.position.x = 2;
    camera.position.y = 2;
    camera.position.z = 1;
    scene.add(camera)
    
    controls = new OrbitControls(camera,canvas);
    controls.addEventListener('change', renderer);

    // controls.autoRotate = true;
    // controls.autoRotateSpeed = 1;
    // controls.screenSpacePanning = true;

    const light4 = new THREE.PointLight(0xc4c4c4,0.8);
    light4.position.set(-500,0,500);
    scene.add(light4);

    const light5 = new THREE.DirectionalLight(0xffffff, 1)
    light5.position.set(2,2,5)
    scene.add(light5)
    const light6 = new THREE.DirectionalLight(0xc4c4c4, 1.5)
    light6.position.set(0,100,-200)
    scene.add(light6)

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
    let car
    loader.load('render3D/3D_tram3/tram_ban_xoay.glb', function(glb){
        // console.log(glb)
        car = glb.scene;
        // tỉ lệ
        car.scale.set(3,3,3);
        // vị trí vật
        car.position.x = 0;
        car.position.y = -1.5;
        car.position.z = 0;
        scene.add(glb.scene);
        animate();
    });
}
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene,camera);

    
    // required if controls.enableDamping or controls.autoRotate are set to true
    // controls.update()
}
ID_home = '._3dTram3'
canvas = document.querySelector(ID_home)
init();