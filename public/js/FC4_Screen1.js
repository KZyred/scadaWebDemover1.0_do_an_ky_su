// Bring up a socket.io connection
var socket = io.connect()
socket.on('connect', function () {
    document.getElementById("hiden-loading").style.display = "none";
})

//đồng ý subcriber topicSub
socket.emit('subscribe', { 'topic': topicSub });

// thông điệp trả ra từ MQTT server
socket.on('mqtt', function(msg) {
    // document.getElementById("hiden-loading").style.display = "none";
    // chuyển stringJson sang object
    var obj = JSON.parse(msg.payload); 

    scanDot(obj,Tram1_2B1, "_2B1")
    scanDot(obj,Tram1_2B2, "_2B2")
    scanDot(obj,Tram1_2B3, "_2B3")
    scanDot(obj,Tram1_2B4, "_2B4")
    scanDot(obj,Tram1_2B5, "_2B5")
    scanDot(obj,Tram1_2B6, "_2B6")
    scanDot(obj,Tram1_2B7, "_2B7")
    scanDot(obj,Tram1_2B8, "_2B8")

    scanDot(obj,Tram1_2B3, "_3PV1")
    scanDot(obj,Tram1_2B4, "_3PV2")
    scanDot(obj,Tram1_2B5, "_3PV3")
    scanDot(obj,Tram1_2B6, "_3PV4")
    scanDot(obj,Tram1_2B7, "_3PV5")
})