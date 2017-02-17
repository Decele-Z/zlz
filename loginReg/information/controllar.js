var module = angular.module('loginReg.Submission.infor',['ngRoute']);
module.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/Submission/infor',{
        templateUrl : 'information/view.html',
        controller:'inforController'
    })
}])
module.controller("inforController",['$scope',function ($scope) {

var guandian1 = document.getElementById("guandian1");
var guandian2 = document.getElementById("guandian2");
var val = document.getElementsByClassName("val");
    var submit = document.getElementById("submit");
    var reset = document.getElementById("reset");
    var title = document.getElementById("title");
    var imgSrc = document.getElementById("imgSrc");
    var textarea = document.getElementById("textarea");
    var author = document.getElementById("author");



if (parseInt(getCookieValue("i"))<4){
    guandian1.innerHTML="观点"
}else if (parseInt(getCookieValue("i"))<8){
    guandian1.innerHTML="创投"
}else if(parseInt(getCookieValue("i"))<10){
    guandian1.innerHTML="商业"
}else{
    guandian1.innerHTML="智客"
}





    guandian2.innerHTML=getCookieValue("key");



    submit.onclick=function () {
        //console.log(getDate());


        if (title.value!=""&&textarea.value!=""&&author.value!=""){
            ajax("post","http://localhost/kxw/loginReg/input.php","key="+getCookieValue("key")+"&title="+title.value+"&img="+imgSrc.value+"&text="+textarea.value+"&author="+author.value+"&date="+ getDate(),function (data) {
                //var isjson= JSON.parse(data);
                alert(data)
                //console.log(data);
            })
        }else {
            alert("请完善信息")
        }





    };


    reset.onclick=function () {
        //alert("111");
        for (var i =0; i<val.length;i++){
            val[i].value=""
        }
    };

    //console.log(document.cookie)



    function getCookieValue (keyname) {
        var keValue = "";
        var theCookie = document.cookie;
        //截取cookie中的键值对
        var cookieArr = theCookie.split(";")

        for(var i = 0; i < cookieArr.length; i++){
            var theKey = ""
            var theValue = ""
            //通过"="截取键值对, 返回的数组 下标0为key值,下标1为value值
            var keyValueArr = cookieArr[i].split("=");
            if(keyValueArr.length > 1){
                theValue = keyValueArr[1].trim();
                theKey = keyValueArr[0].trim()
            }
            if(keyname == theKey && keyname != ""){
                return theValue
            }


        }

        return keValue;
    }

    function getDate () {
        var nowDate = new Date();
        var year = nowDate.getFullYear();

        var month = nowDate.getMonth() + 1;
        var day = nowDate.getDate();
        var hour = nowDate.getHours();
        var minute = nowDate.getMinutes();
        return year +" "+ addZero(month)+ "-" + addZero(day)+" "  +" " + addZero(hour) + ":" + addZero(minute)
    }

    function addZero (n) {
        if (n < 10) {
            return "0" + n;
        } else{
            return n;
        }
    }

}])




/**
 * Created by dllo on 17/2/16.
 */
