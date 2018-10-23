'use strict';

angular
  .module('ngModule')
  .controller('HomeController', [
    '$scope',
    function HomeController($scope) {
      $scope.message = 'Hola mundo, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, natus, quod! Ab at, deleniti iste nam non quae rerum similique temporibus voluptatibus. Animi expedita labore nihil, quas qui tempore voluptatibus.';
    }
  ]);

