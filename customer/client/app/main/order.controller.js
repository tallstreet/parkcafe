'use strict';

angular.module('parkcafeApp')
  .controller('OrderCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];
    $scope.buttonVisible = false;

    $scope.buy = function(){
      // do something
      console.log('Button pressed');
    };

    $http.get('/client_token').success(function(clientToken) {
      $scope.clientToken = clientToken;
      console.log(clientToken);

      braintree.setup(clientToken, 'dropin', {
        container: 'dropin'
      });

      // $scope.buttonVisible = true;

      $('#buy').prop('disabled',false);
    });

  });
