'use strict';

angular.module('parkcafeApp')
  .controller('ProductCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.buy = function(){
      // do something
      console.log("Button pressed");
    };

  });
