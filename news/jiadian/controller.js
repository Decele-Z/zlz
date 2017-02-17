/**
 * Created by dllo on 17/2/16.
 */
/**
 * Created by dllo on 17/2/16.
 */
var module = angular.module('jiadian',[
    'ngRoute',
]);
module.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/jiadian/:page',{
        templateUrl:'jiadian/view.html',
        controller:'jiadianController'
    });
}]);
module.controller('jiadianController',['$scope','$route','$routeParams','$http',function ($scope,$route,$routeParams,$http) {
    $scope.subjects = [];
    $scope.name = "家电";
    var page = parseInt($routeParams.page);
    $route.updateParams({page:page});
    $scope.currentPage = page;
    $scope.go = function (page) {
        if (page >= 1 && page < 3){
            $route.updateParams({page:page})
        }
    }
    ajax("post","http://localhost/0912php/qqqq/news/route1.php","type=2&page="+page,function (data) {
        console.log(data);
        var isJson = JSON.parse(data);
        for (var i=0;i<isJson.length;i++){
            $scope.subjects[i]=isJson[i]
        }
    })
}]);