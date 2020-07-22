<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);

$news = array(
    array('title'=>'德国女总滑雪摔倒 骨盆开裂','data'=>'2014-1-6'),
    array('title'=>'国女总滑雪摔倒 骨盆开裂','data'=>'2014-1-6'),
    array('title'=>'女总滑雪摔倒 骨盆开裂','data'=>'2014-1-6'),
    array('title'=>'总滑雪摔倒 骨盆开裂','data'=>'2014-1-6'),
    array('title'=>'滑雪摔倒 骨盆开裂','data'=>'2014-1-6'),
    array('title'=>'德国女总滑雪摔倒 盆开裂','data'=>'2014-1-6'),
    array('title'=>'德国女总滑雪摔倒 开裂','data'=>'2014-1-6'),
    array('title'=>'德国女总滑雪摔倒 裂','data'=>'2014-1-6'),
    array('title'=>'德国女总滑雪摔 骨盆开裂','data'=>'2014-1-6'),
    array('title'=>'德国女总滑雪 骨盆开裂','data'=>'2014-1-6'),
    array('title'=>'德国女总滑 骨盆开裂','data'=>'2014-1-6'),
    array('title'=>'德国女总 骨盆开裂','data'=>'2014-1-6'),
    array('title'=>'德国女总滑雪摔倒 骨盆开裂','data'=>'2014-1-6'),
    array('title'=>'德国女总滑雪摔倒 骨盆开裂','data'=>'2014-1-6'),
    array('title'=>'德国女总滑雪摔倒 骨盆开裂','data'=>'2014-1-6'),
    array('title'=>'德国女总滑雪摔倒 骨盆开裂','data'=>'2014-1-6'),
);

echo json_encode($news);