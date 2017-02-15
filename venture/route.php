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
        require_once "chuangtou/chuangtou.php";
        break;
    case 1:
        require_once "renwu/renwu.php";
        break;
    case 2:
        require_once "jinrong/jinrong.php";
        break;
    case 3:
        require_once "touzi/touzi.php";
        break;
    default:
        break;
}