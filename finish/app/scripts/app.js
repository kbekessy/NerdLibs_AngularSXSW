'use strict';

// Create our app! Name it  'nerdLibsApp', and inject all the dependencies the app will rely on
var app = angular.module('nerdLibsApp', [
  'ngRoute',
  'nerdLibsApp.services',
  'ui.bootstrap'
]);

// Configure the app with your routes by injecting $routeProvider
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      // Root of your app goes to the menu page
      .when('/', {
        templateUrl: 'views/menu.html'
      })
      // Create route for the menu page
      .when('/menu', {
        templateUrl: 'views/menu.html'
      })
      // Create route for the play page
      .when('/play', {
        templateUrl: 'views/play.html'
      })
      // Create route for the play page with an ID for a specific Nerd Lib
      .when('/play/:id', {
        templateUrl: 'views/play.html'
      })
      // Create route for playing online
      .when('/online', {
        templateUrl: 'views/online.html'
      })
      // Create  route for showing results of the game
      .when('/results', {
        templateUrl: 'views/results.html'
      })
      // Create route for showing results of online game
      .when('/online-results', {
        templateUrl: 'views/online-results.html'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html'
      })
      // Create route for 404 error page
      .when('/404', {
        templateUrl: 'views/404.html'
      })
      // When no other route matches, go to 404 page
      .otherwise({
        redirectTo: '/404'
      });
  }]);
