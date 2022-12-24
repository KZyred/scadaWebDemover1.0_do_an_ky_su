// Bring up a socket.io connection
var socket = io.connect()
socket.on('connect', function () {
    // document.getElementById("hiden-loading").style.display = "none";
})

//đồng ý subcriber topicSub
socket.emit('subscribe', { 'topic': topicSub });

// thông điệp trả ra từ MQTT server
socket.on('mqtt', function(msg) {
    // document.getElementById("hiden-loading").style.display = "none";
    // chuyển stringJson sang object
    var obj = JSON.parse(msg.payload); 

    scanDot(obj,Tram3_2B1, "tram3_2B1")
    scanDot(obj,Tram3_2B2, "tram3_2B2")
    scanDot(obj,Tram3_2B3, "tram3_2B3")
    scanDot(obj,Tram3_2B4, "tram3_2B4")
    scanDot(obj,Tram3_2B5, "tram3_2B5")
    scanDot(obj,Tram3_2B6, "tram3_2B6")

    scanDot(obj,Tram3_4M2, "tram3_4M2")
    scanDot(obj,Tram3_3M5, "tram3_3M5")
    scanDot(obj,Tram3_3M4, "tram3_3M4")
    scanDot(obj,Tram3_4M3, "tram3_4M3")
    scanDot(obj,Tram3_5K4, "tram3_5K4")
    scanDot(obj,Tram3_5K3, "tram3_5K3")
    scanDot(obj,Tram3_3M6, "tram3_3M6")
    scanDot(obj,Tram3_3B1, "tram3_3B1")

})