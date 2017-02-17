/**
 * Created by dllo on 17/2/16.
 */
/**
 * Created by dllo on 17/2/16.
 */
var module = angular.module('yunying',[
    'ngRoute',
]);
module.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/yunying/:page',{
        templateUrl:'yunying/view.html',
        controller:'yunyingController'
    });
}]);
module.controller('yunyingController',['$scope','$route','$routeParams','$http',function ($scope,$route,$routeParams,$http) {
    $scope.subjects = [];
    $scope.name = "运营";
    var page = parseInt($routeParams.page);
    $route.updateParams({page:page});
    $scope.currentPage = page;
    $scope.go = function (page) {
        if (page >= 1 && page < 3){
            $route.updateParams({page:page})
        }
    }
    ajax("post","http://localhost/zlz/news/route1.php","type=4&page="+page,function (data) {
        console.log(data);
        var isJson = JSON.parse(data);
        for (var i=0;i<isJson.length;i++){
            $scope.subjects[i]=isJson[i]
        }
    })
}]);