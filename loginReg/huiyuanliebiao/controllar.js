var module = angular.module('loginReg.huiyuanliebiao',['ngRoute']);
module.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/huiyuanliebiao',{
        templateUrl : 'huiyuanliebiao/view.html',
        controller:'huiyuanliebiaoController'
    })
}])
module.controller("huiyuanliebiaoController",['$scope',function ($scope) {

}])
