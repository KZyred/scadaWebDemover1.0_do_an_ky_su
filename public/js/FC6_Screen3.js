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

    // scanDot(obj,"Channel1.Device1.btt_Manu_Auto", "_2B2")
    // // scanDot(obj,"Channel1.Device1.@2B2", "_2B2")
    // scanDot(obj,"Channel1.Device1.@2B3", "_2B3")
    // scanDot(obj,"Channel1.Device1.@2B4", "_2B4")
    // scanDot(obj,"Channel1.Device1.@2B5", "_2B5")
    // scanDot(obj,"Channel1.Device1.@2B6", "_2B6")
    // scanDot(obj,"Channel1.Device1.@2B7", "_2B7")
    // scanDot(obj,"Channel1.Device1.@2B8", "_2B8")
})