<?php
/**
 * Created by PhpStorm.
 * User: dllo
 * Date: 17/2/16
 * Time: 上午9:58
 */
$userName = $_POST["userName"];
$passWord = $_POST["passWord"];
$type = $_POST["type"];
if ($type == 0){
    $email = $_POST["email"];
    $key = $_POST["key"];
    if ($key == 0){
        $company = $_POST["company"];
        $person = $_POST["person"];
        $phone = $_POST["phone"];
        $sql2 = "INSERT INTO user VALUES (NULL,'{$userName}','{$passWord}','{$email}','{$company}','{$person}','{$phone}','' ,'','',$key)";
    }else{
        $tureName = $_POST["tureName"];
        $QQ = $_POST["QQ"];
        $MSN = $_POST["MSN"];
        $sql2 = "INSERT INTO user VALUES (NULL,'{$userName}','{$passWord}','{$email}','','','','{$tureName}','{$QQ}','{$MSN}',$key)";
    }
}
if ($type == 0){
    //注册模块
    $mysqli = new mysqli("localhost:3306","root","","zlz");
    if ($mysqli->connect_errno){
        die($mysqli->connect_error);
    }
    $mysqli->query("set names utf8");
    $sql = "SELECT userName FROM user";
    $result = $mysqli->query($sql);
    $arr = $result->fetch_all(MYSQLI_ASSOC);
    for ($i=0;$i<count($arr);$i++){
        if ($arr[$i]["userName"] == $userName){
            $resultArr = ["res"=>"用户名重复","state"=>4];
            echo json_encode($resultArr);
            die();
        }
    }
    //$sql2 = "INSERT INTO user VALUES (NULL,'{$userName}','{$passWord}','{$key}')";
    $result = $mysqli->query($sql2);
    $mysqli->close();
    if ($result){
        $resultArr = ["res"=>"注册成功","state"=>3];
        echo json_encode($resultArr);
    }else{
        $resultArr = ["res"=>"注册失败","state"=>4];
        echo json_encode($resultArr);
    }
}else{
    //登录模块
    $mysqli = new mysqli("localhost:3306","root","","zlz");
    if ($mysqli->connect_errno){
        die($mysqli->connect_error);
    }
    $mysqli->query("set names utf8");
    $sql = "SELECT userName,passWord,isKey FROM user";
    $result = $mysqli->query($sql);
    $arr = $result->fetch_all(MYSQLI_ASSOC);
    $isBool = false;
    $name = null;
    for ($i=0;$i<count($arr);$i++){
        if ($arr[$i]["userName"] == $userName && $arr[$i]["passWord"] == $passWord){
            $isBool = true;
            $name = $arr[$i]["userName"];
            $isKey = $arr[$i]["isKey"];
            break;
        }
    }
    $mysqli->close();
    if ($isBool){
        $resultArr = ["res"=>"登陆成功","isKey"=>$isKey,"state"=>1];
        echo json_encode($resultArr);
    }else{
        $resultArr = ["res"=>"登录失败","state"=>0];
        echo json_encode($resultArr);
    }
}
