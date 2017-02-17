var module = angular.module('loginReg.zhuce',['ngRoute']);
module.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/zhuce',{
        templateUrl : 'zhuce/view.html',
        controller:'zhuceController'
    })
}])
module.controller("zhuceController",['$scope',function ($scope) {

var radio1 = document.getElementById("radio1");
var radio2 = document.getElementById("radio2");
var next = document.getElementById("next");
    var next1 = document.getElementById("next1");


next.onclick=function () {

    if(radio1.checked){
        console.log("111")
        next1.href="#/zhuce/member"
    }else if (radio2.checked){
        console.log("222")
        next1.href="#/zhuce/member1"
    }
}


}])
