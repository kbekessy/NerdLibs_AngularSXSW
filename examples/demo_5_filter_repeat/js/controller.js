var app = angular.module('demo_5_app', []);

app.controller('demo_5_controller', function($scope) {
  $scope.developers = [
      {
        name: "Jesus", country: "Spain"
      },
      {
        name: "Dave", country: "Canada"
      },
      {
        name: "Wesley", country: "USA"
      },
      {
        name: "Krzysztof", country: "Poland"
      }
    ];
});