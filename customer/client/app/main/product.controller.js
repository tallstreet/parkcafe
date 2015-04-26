'use strict';

angular.module('parkcafeApp')
  .controller('ProductCtrl', function ($scope, $http, $location) {
    $scope.awesomeThings = [];

    $scope.path = $location.path().split('/')[2];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;

      angular.forEach(awesomeThings, function(product) {
        if (product.id == $scope.path){
          $scope.thisItem = product;
        }
      });
    });

    navigator.geolocation.getCurrentPosition(callback);

    function callback(position) {
      console.log('located at '+ position.coords.latitude + 'N '+ position.coords.longitude + 'E');
      $scope.position = position.coords;
    }

    $http.get('/client_token').success(function(clientToken) {
      $scope.clientToken = clientToken;
      console.log(clientToken);

      braintree.setup(clientToken, 'dropin', {
        container: 'dropin'
      });
      $('#buy').prop('disabled',false);
    });

  });
