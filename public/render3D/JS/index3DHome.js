import * as THREE from "./three.module.js"
import {GLTFLoader} from "./GLTFLoader.js"
import { OrbitControls } from "./OrbitControls.js";


const canvas = document.querySelector('._3dHome')
let scene, camera, renderer, controls;

let _3_tram_dau;
let modul_tayquay,giac_hut,xilanh_day,Phoi_cao_Mau_do_day, Phoi_cao_Mau_do_quay

let Phoi_len_xuong_2,Can_gat_phoi, Module_kiem_tra,Module_nang_ha, Phoi_truot_khi_2, Phoi_truot_duoi
let BanXoay, Phoi_cao_Mau_do_xoay_1 , Phoi_cao_Mau_do_xoay_2 , Phoi_cao_Mau_do_xoay_3, Phoi_cao_Mau_do_xoay_4, Phoi_cao_Mau_do_xoay_5, Phoi_cao_Mau_do_xoay_6

let dot_phoi,giu_phoi, khoan, gat_phoi;

let test = false;
let duoc = false;
let tram2_len = false;
let tram2_gat_phoi = false;
let speed_quay = 6;
let speed_capPhoi = 3;
let diChuyenCaHe = 0;
let xoay = true;
let goc_xoay = 0;
let i = 6;
var materialBase = new THREE.MeshPhongMaterial({ color: 0xffffff, specular: 0x111111, shininess: 200 });
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
        width: 1500,
        height: 1000,
    }
    if (window.innerWidth < 600) {
        sizes.width = 100
        sizes.height = 100
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

    controls = new OrbitControls(camera, canvas);
    controls.addEventListener('change', renderer);
    // tự động quay

    const light5 = new THREE.DirectionalLight(0xffffff, 0.4)
    light5.position.set(500, 0, 0)
    scene.add(light5)
    const light6 = new THREE.DirectionalLight(0xffffff, 0.5)
    light6.position.set(0, 0, -500)
    scene.add(light6)
    const light2 = new THREE.DirectionalLight(0xffffff, 0.5)
    light2.position.set(0, 0, 500)
    scene.add(light2)
    const light1 = new THREE.DirectionalLight(0xffffff, 0.5)
    light1.position.set(0, 500, 0)
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

    // loader.load('render3D/3D_tram2_ghep/3 tram dau.glb', function (glb) {
    //     // tỉ lệ
    //     _3_tram_dau = glb.scene
    //     _3_tram_dau.scale.set(1, 1, 1);
    //     // vị trí vật
    //     _3_tram_dau.position.x = 0+diChuyenCaHe;
    //     _3_tram_dau.position.y = 0;
    //     _3_tram_dau.position.z = 0 + diChuyenCaHe;
    //     scene.add(_3_tram_dau); // thêm vào màn hình
    //     duoc = true;
    // });
    // duoc = true;
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    await Promise.all([
        // await loader.load('render3D/3D_tram2_ghep/3 tram dau.glb', function (glb) {
        //     // tỉ lệ
        //     _3_tram_dau = glb.scene
        //     _3_tram_dau.scale.set(1, 1, 1);
        //     // vị trí vật
        //     _3_tram_dau.position.x = 0+diChuyenCaHe;
        //     _3_tram_dau.position.y = 0;
        //     _3_tram_dau.position.z = 0 - diChuyenCaHe;
        //     scene.add(_3_tram_dau); // thêm vào màn hình
        //     duoc = true;
        // }),
        await loader.load('render3D/3D_tram1_ghep/xilanh_day.glb', function (glb) {
            xilanh_day = glb.scene
            // tỉ lệ
            xilanh_day.scale.set(1, 1, 1);
            // vị trí vật
            xilanh_day.position.x = -0.0845+diChuyenCaHe;
            xilanh_day.position.y = 0.699;
            xilanh_day.position.z = 0.116+diChuyenCaHe;
            scene.add(xilanh_day); // thêm vào màn hình
        }),
        await loader.load('render3D/3D_tram1_ghep/modul_tayquay.glb', async function (glb) {
            modul_tayquay = glb.scene;
            // tỉ lệ
            modul_tayquay.scale.set(1, 1, 1);
            // vị trí vật
            modul_tayquay.position.x = -0.05724999999+diChuyenCaHe;
            modul_tayquay.position.y = 0.7689999999999900000;
            modul_tayquay.position.z = -0.0634999999+diChuyenCaHe;
            modul_tayquay.rotation.y = -Math.PI / 2;
            changeColorObject(modul_tayquay, 0x8B4513)
            scene.add(modul_tayquay); // thêm vào màn hình

            await loader.load('render3D/3D_tram1_ghep/tay_quay_giac_hut.glb', async function (glb) {
                giac_hut = glb.scene;
                // tỉ lệ
                giac_hut.scale.set(1, 1, 1);
                // vị trí vật
                giac_hut.position.x = 0.1795;
                giac_hut.position.y = 0;
                giac_hut.position.z = -0.030;
                giac_hut.rotation.y = -Math.PI ;
                giac_hut.rotation.x = -Math.PI/2 ;
                changeColorObject(giac_hut, 0x999900)
                modul_tayquay.add(giac_hut); // thêm vào màn hình

                await loader.load('render3D/3D_tram1_ghep/Phoi_cao-Mau_do.glb', function (glb) {
                    Phoi_cao_Mau_do_quay = glb.scene;
                    // Phoi_cao_Mau_do = new THREE.Mesh( glb, new THREE.MeshLambertMaterial( { color: 0xbbbbbb} ));
                    // tỉ lệ
                    Phoi_cao_Mau_do_quay.scale.set(1, 1, 1);
                    // vị trí vật
                    Phoi_cao_Mau_do_quay.position.x = 0;
                    Phoi_cao_Mau_do_quay.position.y = 0.024;
                    Phoi_cao_Mau_do_quay.position.z = 0.037;
                    Phoi_cao_Mau_do_quay.rotation.x = -Math.PI/2 ;
                    changeColorObject(Phoi_cao_Mau_do_quay, 0xFF4500)
                    // Phoi_cao_Mau_do_quay.visible = false
                    giac_hut.add(Phoi_cao_Mau_do_quay); // thêm vào màn hình
                })  
            })
        }),
        await loader.load('render3D/3D_tram1_ghep/Phoi_cao-Mau_do.glb', function (glb) {
            Phoi_cao_Mau_do_day = glb.scene;
            // Phoi_cao_Mau_do = new THREE.Mesh( glb, new THREE.MeshLambertMaterial( { color: 0xbbbbbb} ));
            // tỉ lệ
            Phoi_cao_Mau_do_day.scale.set(1, 1, 1);
            // vị trí vật
            Phoi_cao_Mau_do_day.position.x = -0.08+diChuyenCaHe;
            Phoi_cao_Mau_do_day.position.y = 0.7325;
            Phoi_cao_Mau_do_day.position.z = 0.116+diChuyenCaHe;
            changeColorObject(Phoi_cao_Mau_do_day, 0xFF4500)
            scene.add(Phoi_cao_Mau_do_day); // thêm vào màn hình
        })
    ])




    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    loader.load('render3D/3D_tram2_ghep/Module_kiem_tra.glb', function (glb) {
        Module_kiem_tra = glb.scene
        // tỉ lệ
        Module_kiem_tra.scale.set(1, 1, 1);
        // vị trí vật
        Module_kiem_tra.position.x = -0.02528992 + diChuyenCaHe;
        Module_kiem_tra.position.y = 1.1484098434793;
        Module_kiem_tra.position.z = -0.230519 - diChuyenCaHe;
        Module_kiem_tra.rotation.x = Math.PI;
        Module_kiem_tra.rotation.y = Math.PI/2;
        scene.add(Module_kiem_tra); // thêm vào màn hình
    });
    loader.load('render3D/3D_tram2_ghep/Module_nang_ha.glb', function (glb) {
        Module_nang_ha = glb.scene;
        // Phoi_cao_Mau_do = new THREE.Mesh( glb, new THREE.MeshLambertMaterial( { color: 0xbbbbbb} ));
        // tỉ lệ
        Module_nang_ha.scale.set(1, 1, 1);
        // vị trí vật
        Module_nang_ha.position.x = 0.051 + diChuyenCaHe;
        Module_nang_ha.position.y = 0.727158517777;
        Module_nang_ha.position.z = -0.1825 - diChuyenCaHe;
        Module_nang_ha.rotation.y = Math.PI / 2;
        // changeColorObject(Phoi_cao_Mau_do_day, 0xFF4500)
        scene.add(Module_nang_ha); // thêm vào màn hình
    });
    loader.load('render3D/3D_tram2_ghep/Can_gat_phoi.glb', function (glb) {
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
    loader.load('render3D/3D_tram2_ghep/Phoi_cao-Mau_do.glb', function (glb) {
        Phoi_len_xuong_2 = glb.scene;
        // Phoi_cao_Mau_do = new THREE.Mesh( glb, new THREE.MeshLambertMaterial( { color: 0xbbbbbb} ));
        // tỉ lệ
        Phoi_len_xuong_2.scale.set(1, 1, 1);
        // vị trí vật
        Phoi_len_xuong_2.position.x = 0.0505;
        Phoi_len_xuong_2.position.y = 0;
        Phoi_len_xuong_2.position.z = -0.054;
        changeColorObject(Phoi_len_xuong_2, 0xFF4500)
        // Phoi_cao_Mau_do.visible = false
        Module_nang_ha.add(Phoi_len_xuong_2); // thêm vào màn hình
    });   
    loader.load('render3D/3D_tram2_ghep/Phoi_cao-Mau_do.glb', function (glb) {
        Phoi_truot_khi_2 = glb.scene;
        // Phoi_cao_Mau_do = new THREE.Mesh( glb, new THREE.MeshLambertMaterial( { color: 0xbbbbbb} ));
        // tỉ lệ
        Phoi_truot_khi_2.scale.set(1, 1, 1);
        // vị trí vật -0.0029999 290.2955253970300000 873.1011575459400000
        Phoi_truot_khi_2.position.x = -0.0029999;
        Phoi_truot_khi_2.position.y = 0.87310115;
        Phoi_truot_khi_2.position.z = -0.2902955;
        Phoi_truot_khi_2.rotation.x = -14.68385579 * (Math.PI / 180); 
        changeColorObject(Phoi_truot_khi_2, 0xFF4500)
        Phoi_truot_khi_2.visible = false
        scene.add(Phoi_truot_khi_2); // thêm vào màn hình
    });
    loader.load('render3D/3D_tram2_ghep/Phoi_cao-Mau_do.glb', function (glb) {
        Phoi_truot_duoi = glb.scene;
        // Phoi_cao_Mau_do = new THREE.Mesh( glb, new THREE.MeshLambertMaterial( { color: 0xbbbbbb} ));
        // tỉ lệ
        Phoi_truot_duoi.scale.set(1, 1, 1);
        // vị trí vật -0.0029999 290.2955253970300000 873.1011575459400000
        Phoi_truot_duoi.position.x = -0.0029999;
        Phoi_truot_duoi.position.y = 0.727;
        Phoi_truot_duoi.position.z = -0.2902955; 
        changeColorObject(Phoi_truot_duoi, 0xFF4500)
        // Phoi_truot_duoi.visible = false
        scene.add(Phoi_truot_duoi); // thêm vào màn hình
    });
    loader.load('render3D/3D_tram3_ghep/BanXoay.glb', function (glb) {
        BanXoay = glb.scene;
        // Phoi_cao_Mau_do = new THREE.Mesh( glb, new THREE.MeshLambertMaterial( { color: 0xbbbbbb} ));
        // tỉ lệ
        BanXoay.scale.set(1, 1, 1);
        // vị trí vật -0.0029999 290.2955253970300000 873.1011575459400000
        BanXoay.position.x = 0.00015255;
        BanXoay.position.y = 0.80946341752319;
        BanXoay.position.z = -0.70081080423203;
        BanXoay.rotation.y =Math.PI / 2; 
        // changeColorObject(BanXoay, 0xFF4500)
        // Phoi_cao_Mau_do.visible = false
        scene.add(BanXoay); // thêm vào màn hình
    });  
    loader.load('render3D/3D_tram3_ghep/Phoi_cao-Mau_do.glb', function (glb) {
        Phoi_cao_Mau_do_xoay_1 = glb.scene;
        // Phoi_cao_Mau_do = new THREE.Mesh( glb, new THREE.MeshLambertMaterial( { color: 0xbbbbbb} ));
        // tỉ lệ
        Phoi_cao_Mau_do_xoay_1.scale.set(1, 1, 1);
        // vị trí vật -0.0029999 290.2955253970300000 873.1011575459400000
        Phoi_cao_Mau_do_xoay_1.position.x = -0.07675;
        Phoi_cao_Mau_do_xoay_1.position.y = 0;
        Phoi_cao_Mau_do_xoay_1.position.z = 0.13293489948091;
        // Phoi_cao_Mau_do_xoay_1.rotation.x = -(180-165.31614421) * (Math.PI / 180); 
        changeColorObject(Phoi_cao_Mau_do_xoay_1, 0xFF4500)
        Phoi_cao_Mau_do_xoay_1.visible = false
        BanXoay.add(Phoi_cao_Mau_do_xoay_1); // thêm vào màn hình
    });      
    loader.load('render3D/3D_tram3_ghep/Phoi_cao-Mau_do.glb', function (glb) {
        Phoi_cao_Mau_do_xoay_2 = glb.scene;
        // Phoi_cao_Mau_do = new THREE.Mesh( glb, new THREE.MeshLambertMaterial( { color: 0xbbbbbb} ));
        // tỉ lệ
        Phoi_cao_Mau_do_xoay_2.scale.set(1, 1, 1);
        // vị trí vật -0.0029999 290.2955253970300000 873.1011575459400000
        Phoi_cao_Mau_do_xoay_2.position.x = 0.07675;
        Phoi_cao_Mau_do_xoay_2.position.y = 0;
        Phoi_cao_Mau_do_xoay_2.position.z = 0.132934899;
        // Phoi_cao_Mau_do_xoay_1.rotation.x = -(180-165.31614421) * (Math.PI / 180); 
        changeColorObject(Phoi_cao_Mau_do_xoay_2, 0xFF4500)
        Phoi_cao_Mau_do_xoay_2.visible = false
        BanXoay.add(Phoi_cao_Mau_do_xoay_2); // thêm vào màn hình
    });  
    loader.load('render3D/3D_tram3_ghep/Phoi_cao-Mau_do.glb', function (glb) {
        Phoi_cao_Mau_do_xoay_3 = glb.scene;
        // Phoi_cao_Mau_do = new THREE.Mesh( glb, new THREE.MeshLambertMaterial( { color: 0xbbbbbb} ));
        // tỉ lệ
        Phoi_cao_Mau_do_xoay_3.scale.set(1, 1, 1);
        // vị trí vật -0.0029999 290.2955253970300000 873.1011575459400000
        Phoi_cao_Mau_do_xoay_3.position.x = 0.1535;
        Phoi_cao_Mau_do_xoay_3.position.y = 0;
        Phoi_cao_Mau_do_xoay_3.position.z = 0;
        // Phoi_cao_Mau_do_xoay_1.rotation.x = -(180-165.31614421) * (Math.PI / 180); 
        changeColorObject(Phoi_cao_Mau_do_xoay_3, 0xFF4500)
        Phoi_cao_Mau_do_xoay_3.visible = false
        BanXoay.add(Phoi_cao_Mau_do_xoay_3); // thêm vào màn hình
    }); 
    loader.load('render3D/3D_tram3_ghep/Phoi_cao-Mau_do.glb', function (glb) {
        Phoi_cao_Mau_do_xoay_4 = glb.scene;
        // Phoi_cao_Mau_do = new THREE.Mesh( glb, new THREE.MeshLambertMaterial( { color: 0xbbbbbb} ));
        // tỉ lệ
        Phoi_cao_Mau_do_xoay_4.scale.set(1, 1, 1);
        // vị trí vật -0.0029999 290.2955253970300000 873.1011575459400000
        Phoi_cao_Mau_do_xoay_4.position.x = 0.076749999999999;
        Phoi_cao_Mau_do_xoay_4.position.y = 0;
        Phoi_cao_Mau_do_xoay_4.position.z = -0.13293489948091;
        // Phoi_cao_Mau_do_xoay_1.rotation.x = -(180-165.31614421) * (Math.PI / 180); 
        changeColorObject(Phoi_cao_Mau_do_xoay_4, 0xFF4500)
        Phoi_cao_Mau_do_xoay_4.visible = false
        BanXoay.add(Phoi_cao_Mau_do_xoay_4); // thêm vào màn hình
    }); 
    loader.load('render3D/3D_tram3_ghep/Phoi_cao-Mau_do.glb', function (glb) {
        Phoi_cao_Mau_do_xoay_5 = glb.scene;
        // Phoi_cao_Mau_do = new THREE.Mesh( glb, new THREE.MeshLambertMaterial( { color: 0xbbbbbb} ));
        // tỉ lệ
        Phoi_cao_Mau_do_xoay_5.scale.set(1, 1, 1);
        // vị trí vật -0.0029999 290.2955253970300000 873.1011575459400000
        Phoi_cao_Mau_do_xoay_5.position.x = -0.07675;
        Phoi_cao_Mau_do_xoay_5.position.y = 0;
        Phoi_cao_Mau_do_xoay_5.position.z = -0.13293489948;
        // Phoi_cao_Mau_do_xoay_1.rotation.x = -(180-165.31614421) * (Math.PI / 180); 
        changeColorObject(Phoi_cao_Mau_do_xoay_5, 0xFF4500)
        Phoi_cao_Mau_do_xoay_5.visible = false
        BanXoay.add(Phoi_cao_Mau_do_xoay_5); // thêm vào màn hình
    });
    loader.load('render3D/3D_tram3_ghep/Phoi_cao-Mau_do.glb', function (glb) {
        Phoi_cao_Mau_do_xoay_6 = glb.scene;
        // Phoi_cao_Mau_do = new THREE.Mesh( glb, new THREE.MeshLambertMaterial( { color: 0xbbbbbb} ));
        // tỉ lệ
        Phoi_cao_Mau_do_xoay_6.scale.set(1, 1, 1);
        // vị trí vật -0.0029999 290.2955253970300000 873.1011575459400000
        Phoi_cao_Mau_do_xoay_6.position.x = -0.1535;
        Phoi_cao_Mau_do_xoay_6.position.y = 0;
        Phoi_cao_Mau_do_xoay_6.position.z = 0;
        // Phoi_cao_Mau_do_xoay_1.rotation.x = -(180-165.31614421) * (Math.PI / 180); 
        changeColorObject(Phoi_cao_Mau_do_xoay_6, 0xFF4500)
        Phoi_cao_Mau_do_xoay_6.visible = false
        BanXoay.add(Phoi_cao_Mau_do_xoay_6); // thêm vào màn hình
    });
    loader.load('render3D/3D_tram3_ghep/dot_phoi.glb', function (glb) {
        dot_phoi = glb.scene;
        // Phoi_cao_Mau_do = new THREE.Mesh( glb, new THREE.MeshLambertMaterial( { color: 0xbbbbbb} ));
        // tỉ lệ
        dot_phoi.scale.set(1, 1, 1);
        dot_phoi.position.x = -0.132978991;
        dot_phoi.position.y = 0.9395;
        dot_phoi.position.z = -0.624402416;
        // Phoi_cao_Mau_do_xoay_1.rotation.x = -(180-165.31614421) * (Math.PI / 180); 
        changeColorObject(dot_phoi, 0xFF4500)
        // Phoi_cao_Mau_do.visible = false
        scene.add(dot_phoi); // thêm vào màn hình
    });
    loader.load('render3D/3D_tram3_ghep/giu_phoi.glb', function (glb) {
        giu_phoi = glb.scene;
        // Phoi_cao_Mau_do = new THREE.Mesh( glb, new THREE.MeshLambertMaterial( { color: 0xbbbbbb} ));
        // tỉ lệ
        giu_phoi.scale.set(1, 1, 1);
        giu_phoi.position.x = -0.243670068;
        giu_phoi.position.y = 0.819;
        giu_phoi.position.z = -0.844161638;
        giu_phoi.rotation.z = Math.PI / 2
        giu_phoi.rotation.y = -30.55841921 * (Math.PI / 180);
        changeColorObject(giu_phoi, 0xFF4500)
        // Phoi_cao_Mau_do.visible = false
        scene.add(giu_phoi); // thêm vào màn hình
    });
    loader.load('render3D/3D_tram3_ghep/khoan.glb', function (glb) {
        khoan = glb.scene;
        // Phoi_cao_Mau_do = new THREE.Mesh( glb, new THREE.MeshLambertMaterial( { color: 0xbbbbbb} ));
        // tỉ lệ
        khoan.scale.set(1, 1, 1);
        khoan.position.x = -0.1458953;
        khoan.position.y = 0.969645144;
        khoan.position.z = -0.77012175836;
        khoan.rotation.z = -Math.PI / 2;
        khoan.rotation.y = 29.52994997 * (Math.PI / 180);
        changeColorObject(khoan, 0xFF4500)
        // Phoi_cao_Mau_do.visible = false
        scene.add(khoan); // thêm vào màn hình
    });

    loader.load('render3D/3D_tram3_ghep/gat_phoi.glb', function (glb) {
        gat_phoi = glb.scene;
        // Phoi_cao_Mau_do = new THREE.Mesh( glb, new THREE.MeshLambertMaterial( { color: 0xbbbbbb} ));
        // tỉ lệ
        gat_phoi.scale.set(1, 1, 1);
        gat_phoi.position.x = 0.0728704292; 
        gat_phoi.position.y = 0.845;
        gat_phoi.position.z = -0.837245304386;
        gat_phoi.rotation.y = 122.01715249 * (Math.PI / 180);
        changeColorObject(gat_phoi, 0xFF4500)
        // Phoi_cao_Mau_do.visible = false
        scene.add(gat_phoi); // thêm vào màn hình
    });
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    const axesHelper = new THREE.AxesHelper( 5 );
    scene.add( axesHelper ); // thêm vào màn hình
    // renderer.render(scene, camera);
    animate();
}

function animate() {
    // lưu ý: three.js bao gồm shim requestAnimationFrame
     // thay thế cho việc sử dụng setInterval để cập nhật bản vẽ trong trình duyệt
     // điều này thực sự yêu cầu hàm animate được gọi lại cho lần vẽ tiếp theo
    renderer.render(scene, camera);
    requestAnimationFrame(animate);

    /////////////////////// trạm 1////////////////////////////////////////
    if ( _3PV1 == true) {
        if ( modul_tayquay.rotation.z < 2*(Math.PI/2))
        {
            modul_tayquay.rotation.z = (modul_tayquay.rotation.z+(Math.PI/180)* speed_quay)%(2*Math.PI);
            giac_hut.rotation.y = (giac_hut.rotation.y+(Math.PI/180)* speed_quay)%(2*Math.PI);
            // Phoi_cao_Mau_do_quay.visible = true
        }
    }
    if ( _3PV2 == true)
    {
        if ( modul_tayquay.rotation.z > 5*(Math.PI/180))
            {
                modul_tayquay.rotation.z = (modul_tayquay.rotation.z-(Math.PI/180)* speed_quay)%(2*Math.PI);
                giac_hut.rotation.y = (giac_hut.rotation.y-(Math.PI/180)* speed_quay)%(2*Math.PI);
                // Phoi_cao_Mau_do_quay.visible = false
            }
    }
    if ( _3PV5 == true )
    {
        if ( xilanh_day.position.x > -0.0845 + diChuyenCaHe)
        {
            // thu phôi vào
            xilanh_day.position.x = xilanh_day.position.x -0.001* speed_capPhoi;
            Phoi_cao_Mau_do_day.position.x = Phoi_cao_Mau_do_day.position.x -0.001* speed_capPhoi; 
            Phoi_cao_Mau_do_day.visible = false; 
        }
    }
    if ( _3PV4 == true) {
        if ( xilanh_day.position.x < -0.0845 + 0.077 + diChuyenCaHe)
        {
            // đẩy phôi ra
            xilanh_day.position.x = xilanh_day.position.x +0.001* speed_capPhoi;
            Phoi_cao_Mau_do_day.position.x = Phoi_cao_Mau_do_day.position.x +0.001* speed_capPhoi; 
            Phoi_cao_Mau_do_day.visible = true; 
            // PART.visible = false; 
        }
    }
    if ( _3PV3 == true) {
        Phoi_cao_Mau_do_quay.visible = true; 
    }
    else if ( _3PV3 == false) {
        Phoi_cao_Mau_do_quay.visible = false; 
    }
    ////////////////////////////////////////////////////////    
    ////////////////////////////////////////////////////////    
    ////////////////////////////////////////////////////////    


    /////////////////////// trạm 2////////////////////////////////////////
    if ((_2_2B1 == true) && (_2_2B7 == false) && (Phoi_truot_khi_2.visible == false)) {
        Phoi_len_xuong_2.visible = true;
    }
    // xy lanh nâng hạ phôi
    let gioi_han_xy_lanh_len = 0.95
    // lên hết
    if ( _2_3PV1 == true) {
            if (Module_nang_ha.position.y < gioi_han_xy_lanh_len) {
                // xy lanh lên
                Module_nang_ha.position.y = Module_nang_ha.position.y + 0.001* speed_capPhoi;
                if ( Module_nang_ha.position.y > (gioi_han_xy_lanh_len - 0.03)){
                    // kiểm tra chiều cao phôi lến
                    Module_kiem_tra.position.y = Module_kiem_tra.position.y + 0.001* speed_capPhoi;
                }
            }  
    }

    if (_2_2B2 == true) {
        changeColorObject(Phoi_len_xuong_2, 0xFF4500);    // đỏ
    } else if (_2_2B2 == false ) {
        changeColorObject(Phoi_len_xuong_2, 0xAAFF00);    //đen
    }
    // xy lanh nâng hạ đi xuống hết
    let gioi_han_xy_lanh_duoi = 0.727158
    if ((_2_3PV2 == true) && (_2_2B2 == false)){
        if (Module_nang_ha.position.y > gioi_han_xy_lanh_duoi) {
            Module_nang_ha.position.y = Module_nang_ha.position.y - 0.002* speed_capPhoi;
            if (Module_kiem_tra.position.y > 1.1484) {
                // kiểm tra chiều cao phôi xuống
                Module_kiem_tra.position.y = Module_kiem_tra.position.y - 0.002* speed_capPhoi;
            }
        }
        changeColorObject(Phoi_len_xuong_2, 0xAAFF00); // đen
    }
    // xuống giữa
    let gioi_han_xy_lanh_giua = 0.879158
    if ((_2_3PV2 == true) && (_2_2B2 == true)) {
        if (Module_nang_ha.position.y > gioi_han_xy_lanh_giua) {
            Module_nang_ha.position.y = Module_nang_ha.position.y - 0.001* speed_capPhoi;
            if (Module_kiem_tra.position.y > 1.1484) {
                // kiểm tra chiều cao phôi xuống
                Module_kiem_tra.position.y = Module_kiem_tra.position.y - 0.001* speed_capPhoi;
            }
        }
        changeColorObject(Phoi_len_xuong_2, 0xFF4500) //đỏ
    }

    // đấy phôi trạm 2
    let gioi_han_gat_phoi_ra = 0.075
    let gioi_han_gat_phoi_ve = 0.0167
    // đấy phôi trạm 2 đẩy hết
    if (_2_3PV3 == true){
        if (Can_gat_phoi.position.x < gioi_han_gat_phoi_ra){
            Can_gat_phoi.position.x =  Can_gat_phoi.position.x + 0.002* speed_capPhoi;
            Phoi_len_xuong_2.position.x =  Phoi_len_xuong_2.position.x + 0.002* speed_capPhoi;
        }
        if (Module_nang_ha.position.y > gioi_han_xy_lanh_giua) {
            changeColorObject(Phoi_len_xuong_2, 0xFF4500) //đỏ 
        }
    } else if (_2_3PV3 == false) {
        if (Can_gat_phoi.position.x > gioi_han_gat_phoi_ve)
        {
            Can_gat_phoi.position.x =  Can_gat_phoi.position.x - 0.002* speed_capPhoi;
            //ẩn phôi đỏ xy lanh đẩy
            Phoi_len_xuong_2.visible = false
            // phôi về vị trí ban đầu
            Phoi_len_xuong_2.position.x = 0.0505;
            if (Module_nang_ha.position.y > (gioi_han_xy_lanh_giua - 0.1)) {
                // hiện phôi trượt khí
                Phoi_truot_khi_2.visible = true
            }
            if (Module_nang_ha.position.y < (gioi_han_xy_lanh_duoi + 0.01 )) {
                Phoi_truot_duoi.position.z = -0.2902955 + 0.34 - diChuyenCaHe; 
                // hiện phôi trượt dưới
                Phoi_truot_duoi.visible = true
            }
        }
    }
    let gioi_han_Phoi_truot_duoi = -0.019 - diChuyenCaHe
    if (Phoi_truot_duoi.visible == true && (Phoi_truot_duoi.position.z > gioi_han_Phoi_truot_duoi)) {
        Phoi_truot_duoi.position.z = Phoi_truot_duoi.position.z - 0.002* speed_capPhoi;
    }
    // console.log(Phoi_truot_duoi.position.z) > -0.422295 gioi_han_Phoi_truot_duoi?
    // phôi trượt qua máng trượt khí
    let gioi_han_phoi_truot_khi = -0.542295 + 0.34 - diChuyenCaHe
    if ( _2_3PV4 == true ){
        if (Phoi_truot_khi_2.position.z > gioi_han_phoi_truot_khi && Phoi_len_xuong_2.visible == false && Phoi_truot_khi_2.visible == true) {
            Phoi_truot_khi_2.position.z =  Phoi_truot_khi_2.position.z - 0.0015* speed_capPhoi;
            Phoi_truot_khi_2.position.y =  Phoi_truot_khi_2.position.y - 0.000375* speed_capPhoi;
            if (Phoi_truot_khi_2.position.z < gioi_han_phoi_truot_khi) {
                Phoi_truot_khi_2.visible = false;
            }
        }
    } else if (_2_3PV4 == false) {
        Phoi_truot_khi_2.position.y = 0.87310115;
        Phoi_truot_khi_2.position.z = -0.2902955 + 0.34 - diChuyenCaHe;
    }



    ////////////////////////////////////////////////////////    
    ////////////////////////////////////////////////////////    
    //////////////////////////////////////////////////////// 




    if ( _3_5K4 == true && _3_5K3 == false) {
        if ( khoan.position.y > 0.8996451){
            // khoan xuống
            khoan.position.y = khoan.position.y - 0.001* speed_capPhoi;
        }
    }
    if ( _3_5K3 == true &&_3_5K4 == false) {
        if ( khoan.position.y < 0.972645144){
            // khoan lên
            khoan.position.y = khoan.position.y + 0.001* speed_capPhoi;
        }
    }
    if ( _3_3M5 == true) {
        if ( dot_phoi.position.y > 0.9125){
            // đột xuống
            dot_phoi.position.y = dot_phoi.position.y - 0.001* speed_capPhoi;
        }
    } else if ( _3_3M5 == false) {
        if ( dot_phoi.position.y < 0.9395){
            // đột lên
            dot_phoi.position.y = dot_phoi.position.y + 0.001* speed_capPhoi;
        }
    }

    if ( _3_3M6 == true) {
        if ( gat_phoi.rotation.y > 1.25960105){
            // gạt sang
            gat_phoi.rotation.y = gat_phoi.rotation.y - 0.01* speed_quay;
            if ( gat_phoi.rotation.y >  1.25960105){
                if (Phoi_cao_Mau_do_xoay_6.visible == true) {
                    Phoi_cao_Mau_do_xoay_6.visible = false
                }
                if (Phoi_cao_Mau_do_xoay_5.visible == true) {
                    Phoi_cao_Mau_do_xoay_5.visible = false
                }
                if (Phoi_cao_Mau_do_xoay_4.visible == true) {
                    Phoi_cao_Mau_do_xoay_4.visible = false
                }
                if (Phoi_cao_Mau_do_xoay_3.visible == true) {
                    Phoi_cao_Mau_do_xoay_3.visible = false
                }
                if (Phoi_cao_Mau_do_xoay_2.visible == true) {
                    Phoi_cao_Mau_do_xoay_2.visible = false
                }
                if (Phoi_cao_Mau_do_xoay_1.visible == true) {
                    Phoi_cao_Mau_do_xoay_1.visible = false
                }
            }
        }
    } else if ( _3_3M6 == false) {
        if ( gat_phoi.rotation.y < 2.159601054858497){
            // gạt về
            gat_phoi.rotation.y = gat_phoi.rotation.y + 0.01* speed_quay;
        }
    }
    ////////////////////////////////////////////////////////////////
    if ( _3_2B1 == true && _3_2B2 == false && _3_2B3 == false) {
        switch(i) {
            case 6:
                Phoi_cao_Mau_do_xoay_6.visible = true
                break;
            case 5:
                Phoi_cao_Mau_do_xoay_5.visible = true
                break;
            case 4:
                Phoi_cao_Mau_do_xoay_4.visible = true
                break;
            case 3:
                Phoi_cao_Mau_do_xoay_3.visible = true
                break;
            case 2:
                Phoi_cao_Mau_do_xoay_2.visible = true
                break;
            case 1:
                Phoi_cao_Mau_do_xoay_1.visible = true
                break;
        }
    }
    // xoay bàn xoay
    let gioi_han_goc_xoay = 0.3 * (Math.PI / 180)
    if ( _3_4M2 == true) {
        if ( xoay == true) {
            goc_xoay += 0.005* speed_quay;
            if ( (goc_xoay - 60 * (Math.PI / 180)) < gioi_han_goc_xoay) {
                BanXoay.rotation.y = BanXoay.rotation.y - 0.005* speed_quay
            }
            if ( (goc_xoay - 60 * (Math.PI / 180)) > gioi_han_goc_xoay ) {
                i += 1;
                if( i > 6) {
                    i=1
                }
                goc_xoay = 0
                xoay = false
            }
        }
    } else if ( _3_4M2 == false) {
        xoay = true
    }


}
 // phải viết các hàm đọc sự kiện đứng trước {init (hàm lặp vô tận)}
$(document).ready(function() {
    init();
});




















    // if ( duoc == true ) {
    //     // if ( test == true) {
    //     //     if ( modul_tayquay.rotation.z < 2*(Math.PI/2))
    //     //     {
    //     //         modul_tayquay.rotation.z = (modul_tayquay.rotation.z+(Math.PI/180)* speed_quay)%(2*Math.PI);
    //     //         giac_hut.rotation.y = (giac_hut.rotation.y+(Math.PI/180)* speed_quay)%(2*Math.PI);
    //     //         Phoi_cao_Mau_do_quay.visible = true
    //     //     }
    //     // }
    //     // else if ( test == false)
    //     // {
    //     //     if ( modul_tayquay.rotation.z > 0)
    //     //         {
    //     //             modul_tayquay.rotation.z = (modul_tayquay.rotation.z-(Math.PI/180)* speed_quay)%(2*Math.PI);
    //     //             giac_hut.rotation.y = (giac_hut.rotation.y-(Math.PI/180)* speed_quay)%(2*Math.PI);
    //     //             Phoi_cao_Mau_do_quay.visible = false
    //     //         }
    //     // }
    //     // if ( test == true) {
    //     //     if ( xilanh_day.position.x < -0.0845 + 0.077 +diChuyenCaHe)
    //     //     {
    //     //         xilanh_day.position.x = xilanh_day.position.x +0.001* speed_capPhoi;
    //     //         Phoi_cao_Mau_do_day.position.x = Phoi_cao_Mau_do_day.position.x +0.001* speed_capPhoi; 
    //     //         Phoi_cao_Mau_do_day.visible = true; 
    //     //         // PART.visible = false; 
    //     //     }
    //     // }
    //     // else if ( test == false)
    //     // {
    //     //     if ( xilanh_day.position.x > -0.0845 +diChuyenCaHe)
    //     //     {
    //     //         xilanh_day.position.x = xilanh_day.position.x -0.001* speed_capPhoi;
    //     //         Phoi_cao_Mau_do_day.position.x = Phoi_cao_Mau_do_day.position.x -0.001* speed_capPhoi; 
    //     //         Phoi_cao_Mau_do_day.visible = false; 
    //     //     }
    //     // }  


    //     // trạm 2
    //     if ( test == true) {
    //         // if ( (modul_tayquay.rotation.z > 2*(Math.PI/2)) && (test == true))
    //         // {
    //         //     Phoi_cao_Mau_do_quay.visible = false;
    //         // }
    //         // buoc_6 = false;
    //         // buoc_1 = true;
    //         // xy lanh nâng hạ phôi
    //         let gioi_han_xy_lanh_len = 0.95
    //         // lên hết
    //         if ((buoc_1 == true)) {
    //             if (Module_nang_ha.position.y < gioi_han_xy_lanh_len) {
    //                 // xy lanh lên
    //                 Module_nang_ha.position.y = Module_nang_ha.position.y + 0.001* speed_capPhoi;
    //             }
    //             if ( Module_nang_ha.position.y > (gioi_han_xy_lanh_len - 0.03)){
    //                 // kiểm tra chiều cao phôi lến
    //                 Module_kiem_tra.position.y = Module_kiem_tra.position.y + 0.001* speed_capPhoi;
    //             }
    //             if ( Module_nang_ha.position.y > gioi_han_xy_lanh_len){
    //                 buoc_1 = false;
    //                 buoc_2_1 = true;
    //             }
    //         }
    //         // xuống giữa
    //         let gioi_han_xy_lanh_giua = 0.879158
    //         if ((buoc_2_1 == true))
    //         {
    //             if (Module_nang_ha.position.y > gioi_han_xy_lanh_giua) {
    //                 Module_nang_ha.position.y = Module_nang_ha.position.y - 0.001* speed_capPhoi;
    //                 if (Module_kiem_tra.position.y > 1.1484) {
    //                     // kiểm tra chiều cao phôi xuống
    //                     Module_kiem_tra.position.y = Module_kiem_tra.position.y - 0.001* speed_capPhoi;
    //                 }
    //                 if (Module_nang_ha.position.y < gioi_han_xy_lanh_giua) {
    //                     buoc_2_1 = false;
    //                     buoc_3 = true;
    //                 }
    //             }
    //         }
    //         // đấy phôi trạm 2
    //         let gioi_han_gat_phoi_ra = 0.075
    //         // đấy phôi trạm 2 đẩy hết
    //         if (buoc_3 == true){
    //             if ((Can_gat_phoi.position.x < gioi_han_gat_phoi_ra) && (Module_nang_ha.position.y < 0.890158)){
    //                 Can_gat_phoi.position.x =  Can_gat_phoi.position.x + 0.001* speed_capPhoi;
    //                 Phoi_len_xuong_2.position.x =  Phoi_len_xuong_2.position.x + 0.001* speed_capPhoi;
    //                 if (Can_gat_phoi.position.x > gioi_han_gat_phoi_ra){
    //                     // tram2_gat_phoi = true;
    //                     buoc_3 = false;
    //                     buoc_4 = true;
    //                 }
    //             }
    //         }
    //         let gioi_han_gat_phoi_ve = 0.0167
    //         // đấy phôi trạm 2 thu về
    //         if (buoc_4 == true) {
    //             if (Can_gat_phoi.position.x > gioi_han_gat_phoi_ve)
    //             {
    //                 Can_gat_phoi.position.x =  Can_gat_phoi.position.x - 0.001* speed_capPhoi;
    //                 //ẩn phôi đỏ xy lanh đẩy
    //                 Phoi_len_xuong_2.visible = false
    //                 // phôi về vị trí ban đầu
    //                 Phoi_len_xuong_2.position.x = 0.0505;
    //                 // hiện phôi trượt khí
    //                 Phoi_truot_khi_2.visible = true
    //             }
    //             if (Can_gat_phoi.position.x < gioi_han_gat_phoi_ve){
    //                 buoc_4 = false;
    //                 buoc_5 = true;
    //             }
    //         }
    //         // if ( mang_khi == true) {
    //         // if ( mang_khi == true && Phoi_truot_khi_2.position.z > -0.5) {
        
    //         // phôi trượt qua máng trượt khí
    //         let gioi_han_phoi_truot_khi = -0.542295
    //         if ( buoc_5 == true ){
    //             if (Phoi_truot_khi_2.position.z > gioi_han_phoi_truot_khi && Phoi_len_xuong_2.visible == false && Phoi_truot_khi_2.visible == true) {
    //                 Phoi_truot_khi_2.position.z =  Phoi_truot_khi_2.position.z - 0.001* speed_capPhoi;
    //                 Phoi_truot_khi_2.position.y =  Phoi_truot_khi_2.position.y - 0.00025* speed_capPhoi;
    //                 if (Phoi_truot_khi_2.position.z < gioi_han_phoi_truot_khi) {
    //                     Phoi_truot_khi_2.visible = false;
    //                     Phoi_truot_khi_2.position.y = 0.87310115;
    //                     Phoi_truot_khi_2.position.z = -0.2902955;
    //                     buoc_5 = false;
    //                 }
    //                 buoc_6 = true;
    //             }
    //         }
    //         // xy lanh nâng hạ đi xuống hết
    //         let gioi_han_xy_lanh_duoi = 0.727158
    //         if ( buoc_6 == true ){
    //             if (Module_nang_ha.position.y > gioi_han_xy_lanh_duoi) {
    //                 Module_nang_ha.position.y = Module_nang_ha.position.y - 0.001* speed_capPhoi;
    //                 // if (Module_nang_ha.position.y < gioi_han_xy_lanh_duoi) {
    //                 //     buoc_6 = false;
    //                 //     buoc_1 = true;
    //                 // }
    //             }
    //         }
    //         ////////////////////////////////////////////////////////////////
    //         ////////////////////////////////////////////////////////////////
    //         ////////////////////////////////////////////////////////////////
    //          // muốn chạy đẩy phôi trạm 2 thì cho tram2_gat_phoi = false
    //         ////////////////////////////////////////////////////////////////
    //         ////////////////////////////////////////////////////////////////
    //         ////////////////////////////////////////////////////////////////




    //         // if ( (Can_gat_phoi.position.x < 0.07)) {
    //         //     Can_gat_phoi.position.x =  Can_gat_phoi.position.x + 0.001* speed_capPhoi;
    //         // }
    //     } 
    //     if ( test == false) {
    //         buoc_6 = false;
    //         buoc_1 = true;
    //     }
    // }

