<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 17/2/16
 * Time: 下午4:03
 */
$page=$_POST["page"];
//$page =3;
$begin = ($page-1)*10;
$end = $page*10;
$mysqli = new mysqli("localhost:3306","root","","zlz");
if ($mysqli->connect_errno){
    die($mysqli->connect_error);
}
$mysqli->query("set names utf8");
//轮播图查询
$sql1="(SELECT * FROM news WHERE mark = '即时')LIMIT $begin,$end ";
$result1 = $mysqli->query($sql1);
$arr1=$result1->fetch_all(MYSQLI_ASSOC);
//print_r($arr1);
echo json_encode($arr1);