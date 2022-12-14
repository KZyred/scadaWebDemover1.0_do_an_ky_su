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

    scanDot(obj,"Channel1.Device1.btt_Manu_Auto", "_2B2")
    // scanDot(obj,"Channel1.Device1.@2B2", "_2B2")
    scanDot(obj,"Channel1.Device1.@2B3", "_2B3")
    scanDot(obj,"Channel1.Device1.@2B4", "_2B4")
    scanDot(obj,"Channel1.Device1.@2B5", "_2B5")
    scanDot(obj,"Channel1.Device1.@2B6", "_2B6")
    scanDot(obj,"Channel1.Device1.@2B7", "_2B7")
    scanDot(obj,"Channel1.Device1.@2B8", "_2B8")
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