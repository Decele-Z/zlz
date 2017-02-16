/**
 * Created by dllo on 17/2/14.
 */
var module = angular.module('tongxin', ['ngRoute'])
module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/viewpoint/tongxin/:page', {
        templateUrl: 'viewpoint/tongxin/view.html',
        controller: 'tongxinController'
    })
}]);
module.controller('tongxinController', ['$scope','$route','$routeParams','$http', function ($scope,$route,$routeParams,$http) {
    $scope.subjects = [];
    $scope.name = "通信";
    var page = parseInt($routeParams.page);
    $route.updateParams({page:page});

    $scope.currentPage = page;
    $scope.go = function (page) {
        if (page >= 1 && page <= 3){
            $route.updateParams({page:page})
        }
    }

    ajax("post","http://localhost/zlz/viewpoint/route.php","type=3",function (data) {
        var isJson = JSON.parse(data);
        //console.log(isJson);
        //page = 1;

        $scope.pages = page * 10;

            for(var i = (page-1) * 10;i< $scope.pages;i++){
                if (i< 10){
                    $scope.subjects[i] = isJson[i];
                }else{
                    $scope.subjects[i-(10*(page-1))] = isJson[i];
                }
            }
        console.log(page)
        console.log($scope.subjects);
    })
}])