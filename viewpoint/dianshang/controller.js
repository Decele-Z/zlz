/**
 * Created by dllo on 17/2/14.
 */
var module = angular.module('dianshang', ['ngRoute'])
module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/viewpoint/dianshang/:page', {
        templateUrl: 'viewpoint/dianshang/view.html',
        controller: 'dianshangController'
    })
}]);
module.controller('dianshangController', ['$scope','$route','$routeParams','$http', function ($scope,$route,$routeParams,$http) {
    $scope.subjects = [];
    $scope.name = "电商";
    var page = parseInt($routeParams.page);
    $route.updateParams({page:page});

    $scope.currentPage = page;
    $scope.go = function (page) {
        if (page >= 1 && page <= 3){
            $route.updateParams({page:page})
        }
    }

    ajax("post","http://localhost/0912php/qqqq/viewpoint/route.php","type=1",function (data) {
        var isJson = JSON.parse(data);
        //console.log(isJson);
        //page = 1;

        if ((isJson.length-((page-1)*10))/10 > 1){
            $scope.pages = page * 10;
            //console.log(($scope.totalCount-((page-1)*10))/10)
        }else {
            $scope.pages = isJson.length;

        }

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