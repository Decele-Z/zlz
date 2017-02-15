<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 17/2/14
 * Time: 下午7:04
 */
$mysqli = new mysqli("localhost:3306","root","","zlz");
if ($mysqli->connect_errno){
    die($mysqli->connect_error);
}
$mysqli->query("set names utf8");
//轮播图查询
$sql1="SELECT * FROM viewpoint WHERE mark = '观点'";
$result1 = $mysqli->query($sql1);
$arr1=$result1->fetch_all(MYSQLI_ASSOC);
//print_r($arr1);
echo json_encode($arr1);