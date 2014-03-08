'use strict';

var app = angular.module('route_demo_app', [
  'ngRoute'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
       templateUrl: "views/app.html"
      })
      .when('/view1', {
       templateUrl: "views/view1.html"
      })
      .when('/view2', {
       templateUrl: "views/view2.html"
      });
  }]);      
