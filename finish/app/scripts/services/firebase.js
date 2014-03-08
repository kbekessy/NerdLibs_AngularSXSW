'use strict';

angular.module('angularfire.firebase', ['firebase'])

  // A quick wrapper to abstract creating Firebase references
  .factory('firebaseRef', function (Firebase, FBURL) {
    function pathRef(args) {
      for (var i = 0; i < args.length; i++) {
        if (typeof(args[i]) === 'object') {
          args[i] = pathRef(args[i]);
        }
      }
      return args.join('/');
    }

    /**
     * Example:
     * <code>
     *    function(firebaseRef) {
     *       var ref = firebaseRef('path/to/data');
     *    }
     * </code>
     *
     * @function
     * @name firebaseRef
     * @param {String|Array...} path relative path to the root folder in Firebase instance
     * @return a Firebase instance
     */
    return function () {
      return new Firebase(pathRef([FBURL].concat(Array.prototype.slice.call(arguments))));
    };
  })

/**
 * A quick wrapper to abstract creating $firebase objects (see example below)
 */
  .service('syncData', function ($firebase, firebaseRef) {
    /**
     * Create a $firebase reference with just a relative path. For example:
     *
     * <code>
     * function(syncData) {
         *    // a regular $firebase ref
         *    $scope.widget = syncData('widgets/alpha');
         *
         *    // or automatic 3-way binding
         *    syncData('widgets/alpha').$bind($scope, 'widget');
         * }
     * </code>
     *
     * @function
     * @name syncData
     * @param {String|Array...} path relative path to the root folder in Firebase instance
     * @param {int} [limit]
     * @return a Firebase instance
     */
    return function (path, limit) {
      var ref = firebaseRef(path);
      if( limit ) {
        ref = ref.limit(limit);
      }
      return $firebase(ref);
    };
  });