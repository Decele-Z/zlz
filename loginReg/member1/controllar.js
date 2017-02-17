var module = angular.module('loginReg.zhuce.member1',['ngRoute']);
module.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/zhuce/member1',{
        templateUrl : 'member1/view.html',
        controller:'member1Controller'
    })
}])
module.controller("member1Controller",['$scope',function ($scope) {

    var qytj = document.getElementById("qytj");
    var mashang2 = document.getElementById("mashang2");
    var username2 = document.getElementById("username2");
    var password2 = document.getElementById("password2");
    var repassword2 = document.getElementById("repassword2");
    var email2 = document.getElementById("email2");
    var company = document.getElementById("company");
    var phone = document.getElementById("phone");
    var person = document.getElementById("person");


    qytj.onclick=function () {
        // console.log(repassword2)
        if(username2.value!=""&&password2.value!=""&&repassword2.value!=""&&email2.value!=""){
            if(password2.value==repassword2.value){
                ajax("post","http://localhost/kxw/loginReg/logReg.php","key=0&type=0"+"&userName="+username2.value+"&passWord="+password2.value+"&email="+email2.value+"&company="+company.value+"&person="+person.value+"&phone="+phone.value,function (data) {
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
