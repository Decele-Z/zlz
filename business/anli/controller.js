/**
 * Created by dllo on 17/2/15.
 */
var module = angular.module('anli', ['ngRoute'])
module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/business/anli/:page', {
        templateUrl: 'business/anli/view.html',
        controller: 'anliController'
    })
}]);
module.controller('anliController', ['$scope','$route','$routeParams','$http', function ($scope,$route,$routeParams,$http) {
    $scope.subjects = [];
    $scope.name = "观点";
    var page = parseInt($routeParams.page);
    $route.updateParams({page:page});

    $scope.currentPage = page;
    $scope.go = function (page) {
        if (page >= 1 && page <= 3){
            $route.updateParams({page:page})
        }
    }

    ajax("post","http://localhost/0912php/qqqq/business/route.php","type=1",function (data) {
        var isJson = JSON.parse(data);
        //console.log(isJson);
        //page = 1;

        //$scope.pages = page * 10;
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