<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 17/2/14
 * Time: 上午10:37
 */
$mysqli = new mysqli("localhost:3306","root","","zlz");
if ($mysqli->connect_errno){
    die($mysqli->connect_error);
}
$mysqli->query("set names utf8");
//轮播图查询
$sql1="SELECT * FROM bigImgShow";
//今日头条
$sql2="SELECT * FROM tNews";
//精选导读
$sql3="SELECT * FROM introduction";
//热门推荐
$sql4="SELECT * FROM hotRecommend";
//阅读推荐
$sql5="SELECT * FROM readRecommend";
$result1 = $mysqli->query($sql1);
$result2 = $mysqli->query($sql2);
$result3 = $mysqli->query($sql3);
$result4 = $mysqli->query($sql4);
$result5 = $mysqli->query($sql5);
$arr1=$result1->fetch_all(MYSQLI_ASSOC);
$arr2=$result2->fetch_all(MYSQLI_ASSOC);
$arr3=$result3->fetch_all(MYSQLI_ASSOC);
$arr4=$result4->fetch_all(MYSQLI_ASSOC);
$arr5=$result5->fetch_all(MYSQLI_ASSOC);
//print_r($arr2);
$arrAll = ["bigImgShow"=>$arr1,"tNews"=>$arr2,"introduction"=>$arr3,"hotRecommend"=>$arr4,"readRecommend"=>$arr5];
//echo ($arrAll);
//echo ($arrAll["swiper"][0]["imgSrc"]);
echo json_encode($arrAll);
