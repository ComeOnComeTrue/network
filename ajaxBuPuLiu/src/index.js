

var oLi = $('li');
var page = 1;
var flag = false; //加锁为了防止上一次没请求完又请求
function getMinLi() {
    var index = 0;
    var minH = $(oLi[0]).height();  
    for (var i = 0; i < oLi.length; i++) { 
        if ($(oLi[i]).height() < minH) { 
            index = i;  //1-4 
            minH = $(oLi[i]).height();
        }
    }
    return {
        index: index, //高度最小的索引
        minH: minH //最小的高度
    };
}

function getData() { // 获取
    if(flag){
        return;
    }
    flag = true;
    $('.loading').show();
    $.ajax({
        type: 'GET',
        url: './src/data.php',
        data: {
            cpage: page // 第几页 几轮
        },
        success: function (data) {
            console.log(data)
            var dataList = JSON.parse(data); // 转换成JSON格式  类数组
            dataList.forEach(function (ele, index) {
                renderDom(ele);  
            });
            if(dataList.length < 1) { // 如果数据小于1了就让他刷回第一页的数据
                page = 1;
            }
            $('.loading').hide();
            page ++;
            flag = false;
        }
    })
}

function renderDom(item) { // 渲染
    var oDiv = $('<div class="item-content"></div>');
    var img = new Image();
    img.src = item.image;
    var p = $('<p></p>');
    p.text(item.title);
    img.onload = function () {
        oDiv.append(img).append(p);
        var index = getMinLi().index; // getMinLi的索引
        $(oLi[index]).append(oDiv);//插到对应的li中//变成jQ对象才能使用append
    }
}

getData();
// 
//
$(window).scroll(function () {
    // console.log($(window).scrollTop(), $(window).height())
    // 最短列的高度 < 滑轮滚动的距离 + 页面window的高度
    var scrollHeight = $(window).scrollTop();
    var winH = $(window).height();
    var minH = getMinLi().minH;
    if (minH <= winH + scrollHeight) {
        getData();
    }

});