
var socket = io.connect()

// Yêu cầu dữ liệu bảng
function fn_Table01_SQL_Show(){
    socket.emit("msg_SQL_Show", "true");
    socket.on('SQL_Show',function(data){
        fn_table_01(data);
    }); 
    document.getElementById("hiden-loading").style.display = "none";
}

fn_Table01_SQL_Show()
// Hiển thị dữ liệu ra bảng
function fn_table_01(data){
    if(data){
        $("#table_01 tbody").empty(); 
        var len = data.length;
        var txt = "<tbody>";
        if(len > 0){
            for(var i=len-1;i>0;i--){
                    txt +="<tr><td>"+data[i].id
                        +"</td><td>"+data[i]._NAME
                        +"</td><td>"+data[i]._NUMERICID
                        +"</td><td>"+data[i]._VALUE
                        +"</td><td>"+data[i]._TIMESTAMP
                        +"</td><td>"+data[i]._QUALITY
                        +"</td></tr>";
                    }
            if(txt != ""){
            txt +="</tbody>"; 
            $("#table_01").append(txt);
            }
        }
    }   
}

// Tìm kiếm SQL theo khoảng thời gian
function fn_SQL_By_Time()
{
    var val = [document.getElementById('dtpk_Search_Start').value,
               document.getElementById('dtpk_Search_End').value];
    console.log(val[0]);
    if (val[0] != "" && val[1] !=""){
        socket.emit('msg_SQL_ByTime', val);
        socket.on('SQL_ByTime', function(data){
            fn_table_01(data); // Show sdata
        });
    }
}