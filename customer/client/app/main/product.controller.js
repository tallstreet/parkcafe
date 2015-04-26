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

    $http.get('/client_token').success(function(clientToken) {
      $scope.clientToken = clientToken;
      console.log(clientToken);

      braintree.setup(clientToken, 'dropin', {
        container: 'dropin'
      });
      $('#buy').prop('disabled',false);
    });

    $scope.buy = function(){
      console.log('Buy button pressed');
      $http.post('/new', {'lat': 51.5084, 'lon': -0.06087, 'order': 'icecreme', 'id': 3}).success(function(response) {
        console.log(response);
      });

    };

  });
