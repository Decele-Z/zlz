/**
 * Created by dllo on 17/2/14.
 */
var module = angular.module('point', ['ngRoute'])
module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/viewpoint/point/:page', {
        templateUrl: 'viewpoint/point/view.html',
        controller: 'pointController'
    })
}]);
module.controller('pointController', ['$scope','$route','$routeParams','$http', function ($scope,$route,$routeParams,$http) {
    $scope.subjects = [];
    $scope.name = "观点";
    var page = parseInt($routeParams.page);

    $scope.currentPage = page;
    $scope.go = function (page) {
        if (page >= 1 && page <= 3){
            $route.updateParams({page:page})
        }
    }

    $route.updateParams({page:page});
    ajax("post","http://localhost/0912php/git/viewpoint/route.php","type=0",function (data) {
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

