<?php

$type = $_POST["type"];
switch ($type){
    case 0:
        require_once "yejie/yejie.php";
        break;
    case 1:
        require_once "phone/phone.php";
        break;
    case 2:
        require_once "jiadian/jiadian.php";
        break;
    case 3:
        require_once "shouyou/shouyou.php";
        break;
    case 4:
        require_once "yunying/yunying.php";
        break;
    case 5:
        require_once "jishi/jishi.php";
        break;
    default:
        break;
}