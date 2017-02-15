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
        require_once "jingxuan/jingxuan.php";
        break;
    case 1:
        require_once "ceping/ceping.php";
        break;
    default:
        break;
}