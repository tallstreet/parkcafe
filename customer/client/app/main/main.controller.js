'use strict';

angular.module('parkcafeApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $http.get('/client_token').success(function(clientToken) {
      $scope.clientToken = clientToken;
      console.log(clientToken);
    });


  });
