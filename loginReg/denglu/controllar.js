var module = angular.module('loginReg.denglu',['ngRoute']);
module.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/denglu',{
        templateUrl : 'denglu/view.html',
        controller:'dengluController'
    })
}])
module.controller("dengluController",['$scope',function ($scope) {
var dl_btn = document.getElementById("dl_btn");
    var user = document.getElementById("user");
    var pass = document.getElementById("pass");

dl_btn.onclick=function () {
    ajax("post","http://localhost/0912php/qqqq/loginReg/logReg.php","key=1&type=1"+"&userName="+user.value+"&passWord="+pass.value,function (data) {
        var isJson = JSON.parse(data)
        alert(isJson.res)
        //console.log(data)

    })
}

}])
