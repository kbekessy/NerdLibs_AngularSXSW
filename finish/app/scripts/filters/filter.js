'use strict';
/* global $*/

// Create a reference for our main app nerdLibsApp
var app = angular.module('nerdLibsApp');

// Add a filter module to our app that will help force the order of the words in our Nerd Libs
app.filter('forceNaturalOrder', function() {
	return function(obj) {
		if (!(obj instanceof Object)){
			return obj;
		}

    return $.map(obj, function(val, key) {
        return Object.defineProperty(val, '$key', {value: key});
      });
	};
});