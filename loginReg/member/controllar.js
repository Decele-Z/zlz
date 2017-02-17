var module = angular.module('loginReg.zhuce.member',['ngRoute']);
module.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/zhuce/member',{
        templateUrl : 'member/view.html',
        controller:'memberController'
    })
}])
module.controller("memberController",['$scope',function ($scope) {

    var pttj = document.getElementById("pttj");
    var mashang1 = document.getElementById("mashang1");
    var username1 = document.getElementById("username1");
    var password1 = document.getElementById("password1");
    var repassword1 = document.getElementById("repassword1");
    var email1 = document.getElementById("email1");
    var turename = document.getElementById("turename");
    var qq = document.getElementById("qq");
    var msn = document.getElementById("msn");

    pttj.onclick=function () {
        if(username1.value!=""&&password1.value!=""&&repassword1.value!=""&&email1.value!=""){
            if(password1.value==repassword1.value){
                ajax("post","http://localhost/0912php/qqqq/loginReg/logReg.php","key=1&type=0"+"&userName="+username1.value+"&passWord="+password1.value+"&email="+email1.value+"&tureName="+turename.value+"&QQ="+qq.value+"&MSN="+msn.value,function (data) {
                               var isJson = JSON.parse(data)
                                alert(isJson.res)
                                 //console.log(data)
                })
            }else{
                alert("两次密码不一致")
            }
        }else{
            alert("请认真填写信息")
        }
    }



}])
