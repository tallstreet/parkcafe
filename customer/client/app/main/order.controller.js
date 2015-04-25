'use strict';

angular.module('parkcafeApp')
  .controller('OrderCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $scope.buy = function(){
      // do something
      console.log("Button pressed");
    };

    $http.get('/client_token').success(function(clientToken) {
      $scope.clientToken = clientToken;
      console.log(clientToken);

      braintree.setup(clientToken, 'dropin', {
        container: 'dropin-container'
      });
    });

  });
