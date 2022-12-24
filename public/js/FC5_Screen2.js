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

    scanDot(obj,Tram2_2B1, "tram2_2B1")
    scanDot(obj,Tram2_2B2, "tram2_2B2")
    scanDot(obj,Tram2_2B3, "tram2_2B3")
    scanDot(obj,Tram2_2B4, "tram2_2B4")
    scanDot(obj,Tram2_2B5, "tram2_2B5")
    scanDot(obj,Tram2_2B6, "tram2_2B6")
    scanDot(obj,Tram2_2B7, "tram2_2B7")

    scanDot(obj,Tram2_3PV1, "tram2_3PV1")
    scanDot(obj,Tram2_3PV2, "tram2_3PV2")
    scanDot(obj,Tram2_3PV3, "tram2_3PV3")
    scanDot(obj,Tram2_3PV4, "tram2_3PV4")
    scanDot(obj,Tram2_3B1, "tram2_3B1")
})









// // Yêu cầu dữ liệu bảng
// function fn_Table01_SQL_Show(){
//     socket.emit("msg_SQL_Show", "true");
//     socket.on('SQL_Show',function(data){
//         fn_table_01(data);
//     }); 
// }
// // Hiển thị dữ liệu ra bảng
// function fn_table_01(data){
//     if(data){
//         $("#table_01 tbody").empty(); 
//         var len = data.length;
//         var txt = "<tbody>";
//         if(len > 0){
//             for(var i=0;i<len;i++){
//                     txt += "<tr><td>"+data[i].date_time
//                         +"</td><td>"+data[i].data_Bool
//                         +"</td><td>"+data[i].data_Integer
//                         +"</td><td>"+data[i].data_Real
//                         +"</td></tr>";
//                     }
//             if(txt != ""){
//             txt +="</tbody>"; 
//             $("#table_01").append(txt);
//             }
//         }
//     }   
// }

// // Tìm kiếm SQL theo khoảng thời gian
// function fn_SQL_By_Time()
// {
//     var val = [document.getElementById('dtpk_Search_Start').value,
//                document.getElementById('dtpk_Search_End').value];
//     socket.emit('msg_SQL_ByTime', val);
//     socket.on('SQL_ByTime', function(data){
//         fn_table_01(data); // Show sdata
//     });
// }