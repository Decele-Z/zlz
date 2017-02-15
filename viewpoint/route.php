<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 17/2/14
 * Time: 下午7:15
 */
$type = $_POST["type"];
switch ($type){
    case 0:
        require_once "point/guandian.php";
        break;
    case 1:
        require_once "dianshang/dianshang.php";
        break;
    case 2:
        require_once "chuanmei/chuanmei.php";
        break;
    case 3:
        require_once "tongxin/tongxin.php";
        break;
    default:
        break;
}