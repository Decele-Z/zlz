<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 17/2/14
 * Time: 上午10:35
 */
$type = $_POST["type"];
switch ($type){
    case 0:
        require_once "home.php";
        break;
    case 1:
        require_once "select.php";
        break;
    case 2:
        require_once "delete.php";
        break;
    default:
        break;
}