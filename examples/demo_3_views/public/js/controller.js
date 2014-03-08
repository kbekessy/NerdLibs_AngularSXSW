'use strict';

var app = angular.module('demo_3_views', [
  'ngRoute'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
       templateUrl: "views/app.html",
       controller: "AppCtrl"
      })
      .when('/question', {
       templateUrl: "views/app.html",
       controller: "AppCtrl"
      })
      .when('/anwser',{
        templateUrl: "views/app.html",
        controller: "TestCtrl"
      })
      .otherwise({
        redirectTo: '/404'
      });
  }]);      

app.controller("AppCtrl", function($scope){
  $scope.model = {
    message: "No seriously, what does a fox say?", 
    url:"views/fox.html"
  }
});

app.controller("TestCtrl", function($scope){
  $scope.model = {
    message: "Mah-ka-kikia-ka-woo-bing-whoo!!!",
    url:"views/fox2.html"
  }
});