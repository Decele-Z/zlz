var module = angular.module('loginReg.Submission',['ngRoute']);
module.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/Submission',{
        templateUrl : 'Submission/view.html',
        controller:'SubmissionController'
    })
}])
module.controller("SubmissionController",['$scope',function ($scope) {

    var sub_view = document.getElementsByClassName("sub_view");

    var arrInform = ["观点","电商","传媒","通信","创业","人物","金融","通投资","商业","案例","精选","评测"];
    var isClick =  "";

    for(var i = 0 ; i < sub_view.length; i++){

        sub_view[i].onclick = (function  (i) {


            return function  () {
                 isClick = arrInform[i];
                //alert(isClick);
                document.cookie = "key="+isClick;
                document.cookie = "i=" +i;
                for(var j = 0;j<sub_view.length;j++){
                    sub_view[j].style.backgroundColor = "";
                    sub_view[j].style.color = "black";
                }
                sub_view[i].style.backgroundColor = "#0069D9";
                sub_view[i].style.color = "white";
            }
        })(i)


    }
    var subBtn = document.getElementById("subBtn");
    var sub =document.getElementById("sub");

    subBtn.onclick=function () {
        if(isClick!=""){
            sub.href = "#/Submission/infor";
        }else {
            alert("请选择栏目")
        }
    };





}]);




