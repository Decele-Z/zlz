<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 17/2/15
 * Time: 下午3:23
 */
$mysqli = new mysqli("localhost:3306","root","","zlz");
if ($mysqli->connect_errno){
    die($mysqli->connect_error);
}
$mysqli->query("set names utf8");
//轮播图查询
$sql1="SELECT * FROM isCase WHERE mark = '测评'";
$result1 = $mysqli->query($sql1);
$arr1=$result1->fetch_all(MYSQLI_ASSOC);
//print_r($arr1);
echo json_encode($arr1);