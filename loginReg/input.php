<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 17/2/16
 * Time: 下午2:45
 */
$key = $_POST["key"];
$title = $_POST["title"];
$img = $_POST["img"];
$text = $_POST["text"];
$author = $_POST["author"];
$date = $_POST["date"];


$sql = "INSERT INTO viewpoint VALUES (NULL,'{$key}','{$title}','{$text}','{$author}','{$date}','{$img}')";
if ($key == "观点" || $key == "电商" || $key == "传媒" ||$key == "通信"){
    $sql = "INSERT INTO viewpoint VALUES (NULL,'{$key}','{$title}','{$text}','{$author}','{$date}','{$img}')";
}else if ($key == "创业" || $key == "人物" || $key == "金融" || $key == "投资"){
    $sql = "INSERT INTO venture VALUES (NULL,'{$key}','{$title}','{$text}','{$author}','{$date}','{$img}')";
}else if ($key == "商业" || $key == "案例"){
    $sql = "INSERT INTO buiness VALUES (NULL,'{$key}','{$title}','{$text}','{$author}','{$date}','{$img}')";
}else if ($key == "精选" || $key == "评测"){
    $sql = "INSERT INTO isCase VALUES (NULL,'{$key}','{$title}','{$text}','{$author}','{$date}','{$img}')";
}
//echo $sql;
$mysqli = new mysqli("localhost:3306","root","","zlz");
if ($mysqli->connect_errno){
    die($mysqli->connect_error);
}
$mysqli->query("set names utf8");
$result = $mysqli->query($sql);
$mysqli->close();
    if ($result){
        echo "发布成功";
    }else{
        echo "发布失败";
    }