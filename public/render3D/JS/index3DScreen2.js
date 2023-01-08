import * as THREE from "./three.module.js"
import {GLTFLoader} from "./GLTFLoader.js"
import { OrbitControls } from "./OrbitControls.js";

let canvas, ID_home
let scene, camera, renderer, controls;
let Phoi_cao_Mau_do, Can_gat_phoi, Tram_kiem_tra_thieu, Module_kiem_tra, Module_nang_ha
let test = false;
let speed_quay = 8;
let speed_capPhoi = 5;
let diChuyenCaHe = 0.4;

function changeColorObject( Object, colorObject ) {
    Object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            // set the object color
            child.material.color.setHex(colorObject);
        }
    });
}
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
    camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height, 0.01, 10000)
    //vị trí camera
    camera.position.x = 1;
    camera.position.y = 1.52;
    camera.position.z = -0.8;
    scene.add(camera)
    
    controls = new OrbitControls(camera,canvas);
    controls.addEventListener('change', renderer);

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

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) // liên quan đến chi tiết vật
    renderer.shadowMap.enabled = true
    renderer.gammaOutput = true

    let loader = new GLTFLoader();

    await Promise.all([
        await loader.load('render3D/3D_Tram2/Tram_kiem_tra_thieu.glb', function (glb) {
            ///////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////
            document.getElementById("hiden-loading").style.display = "none";
            ///////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////
            // tỉ lệ
            Tram_kiem_tra_thieu = glb.scene
            Tram_kiem_tra_thieu.scale.set(1, 1, 1);
            // vị trí vật
            Tram_kiem_tra_thieu.position.x = 0+diChuyenCaHe;
            Tram_kiem_tra_thieu.position.y = 0;
            Tram_kiem_tra_thieu.position.z = 0-diChuyenCaHe;
            scene.add(Tram_kiem_tra_thieu); // thêm vào màn hình
        }),
        await loader.load('render3D/3D_Tram2/Module_kiem_tra.glb', function (glb) {
        Module_kiem_tra = glb.scene
        // tỉ lệ
        Module_kiem_tra.scale.set(1, 1, 1);
        // vị trí vật
        Module_kiem_tra.position.x = -0.02528992 + diChuyenCaHe;
        Module_kiem_tra.position.y = 1.1484098434793;
        Module_kiem_tra.position.z = 0.1094810 - diChuyenCaHe;
        Module_kiem_tra.rotation.x = Math.PI;
        Module_kiem_tra.rotation.y = Math.PI/2;
        scene.add(Module_kiem_tra); // thêm vào màn hình
        }),
        await loader.load('render3D/3D_Tram2/Module_nang_ha.glb', async function (glb) {
                Module_nang_ha = glb.scene;
                // tỉ lệ
                Module_nang_ha.scale.set(1, 1, 1);
                // vị trí vật
                Module_nang_ha.position.x = 0.051 + diChuyenCaHe;
                Module_nang_ha.position.y = 0.727158517777;
                Module_nang_ha.position.z = 0.1575 - diChuyenCaHe;
                Module_nang_ha.rotation.y = Math.PI / 2;
                // changeColorObject(Phoi_cao_Mau_do_day, 0xFF4500)
                scene.add(Module_nang_ha); // thêm vào màn hình

            await loader.load('render3D/3D_Tram2/Can_gat_phoi.glb', function (glb) {
                Can_gat_phoi = glb.scene;
                // Phoi_cao_Mau_do = new THREE.Mesh( glb, new THREE.MeshLambertMaterial( { color: 0xbbbbbb} ));
                // tỉ lệ
                Can_gat_phoi.scale.set(1, 1, 1);
                // vị trí vật
                Can_gat_phoi.position.x = 0.01665851777777;
                Can_gat_phoi.position.y = 0;
                Can_gat_phoi.position.z = -0.054;
                Can_gat_phoi.rotation.z = -Math.PI / 2;
                Can_gat_phoi.rotation.x = Math.PI / 2;
                // changeColorObject(Can_gat_phoi, 0xFF4500)
                Module_nang_ha.add(Can_gat_phoi); // thêm vào màn hình
            });
            await loader.load('render3D/3D_Tram2/Phoi_cao-Mau_do.glb', function (glb) {
                Phoi_cao_Mau_do = glb.scene;
                // Phoi_cao_Mau_do = new THREE.Mesh( glb, new THREE.MeshLambertMaterial( { color: 0xbbbbbb} ));
                // tỉ lệ
                Phoi_cao_Mau_do.scale.set(1, 1, 1);
                // vị trí vật
                Phoi_cao_Mau_do.position.x = 0.0505;
                Phoi_cao_Mau_do.position.y = 0;
                Phoi_cao_Mau_do.position.z = -0.054;
                changeColorObject(Phoi_cao_Mau_do, 0xFF4500)
                // Phoi_cao_Mau_do.visible = false
                Module_nang_ha.add(Phoi_cao_Mau_do); // thêm vào màn hình
            }); 
        }),
        // await loader.load('render3D/3D_Tram2/Phoi_cao-Mau_do.glb', function (glb) {
        //     Phoi_cao_Mau_do_day = glb.scene;
        //     // Phoi_cao_Mau_do = new THREE.Mesh( glb, new THREE.MeshLambertMaterial( { color: 0xbbbbbb} ));
        //     // tỉ lệ
        //     Phoi_cao_Mau_do_day.scale.set(1, 1, 1);
        //     // vị trí vật
        //     Phoi_cao_Mau_do_day.position.x = -0.08+diChuyenCaHe;
        //     Phoi_cao_Mau_do_day.position.y = 0.7325;
        //     Phoi_cao_Mau_do_day.position.z = 0.116+diChuyenCaHe;
        //     changeColorObject(Phoi_cao_Mau_do_day, 0xFF4500)
        //     scene.add(Phoi_cao_Mau_do_day); // thêm vào màn hình
        // })
    ])
    // const axesHelper = new THREE.AxesHelper( 5 );
    // scene.add( axesHelper ); // thêm vào màn hình
    animate();
}
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
}
// phải viết các hàm đọc sự kiện đứng trước {init (hàm lặp vô tận)}

ID_home = '._3dTram2'
canvas = document.querySelector(ID_home)
init();


