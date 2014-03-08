'use strict';

var app = angular.module('nerdLibsApp');

app.controller('AdminCtrl', ['$scope', '$location', '$firebase', 'firebaseService', 'templateService',
	function($scope, $location, $firebase, firebaseService, templateService) {

		$scope.fbPlay = firebaseService;

		$scope.playAgain = function(){
			templateService.game = {};
			$scope.fbPlay.$remove();
			templateService.getTemplateById('2', function(data){
        $scope.fbPlay.$set(data);
        $location.path('/online');
      });
		};
	}
]);
