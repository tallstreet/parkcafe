'use strict';

angular.module('parkcafeApp')
  .controller('ProductCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $scope.buy = function(){
      console.log('Buy button pressed');
      $http.post('/new', {'lat': 51.5084, 'lon': -0.06087, 'order': 'icecreme', 'id': 3}).success(function(response) {
        console.log(response);
      });

    };

  });
