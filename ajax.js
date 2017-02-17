/**
 * Created by dllo on 16/12/6.
 */
             //方法/地址/数据包/请求成功后的回调函数
function ajax(method,url,data,success) {
    var xhr = null;
    if (window.XMLHttpRequest){
        xhr= new XMLHttpRequest();
    }else {
        xhr = new ActiveXObject();
    }
    if (method == "get"){
        url +="?"+data;
    }
    xhr.open(method,url,true);
    if (method =="get"){
        xhr.send();
    }else {
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
        xhr.send(data);
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState==4){
            if (xhr.status==200){
                success&&success(xhr.responseText);
            }else {
                alert("出错了"+xhr.status);
            }
        }
    }
}