//ajax封装
function ajaxFunc(method, url, data, callback, flag) {
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new XMLHttpRequest('Microsoft.XMLHttp');
    }
    method = method.toUpperCase();//转换成大写
    if (method == 'GET') {
        xhr.open(method, url + '?' + data, flag)
        xhr.send()
    } else if (method == 'POST') {
        xhr.open(method, url, flag);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(data);
    }
    xhr.onreadystatechange = function () { //监听状态的方法,0~4
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                // xhr.responseText;//获得数据
                callback(xhr.responseText);//回调 showList(xhr.responseText)
            }
        }
    }
}