'use strict';

angular.module('parkcafeApp')
  .controller('StatusCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];
    $scope.buttonVisible = false;

    $scope.buy = function(){
      // do something
      console.log('Button pressed');
    };



    function callback(position) {
      console.log('located at '+ position.coords.latitude + 'N '+ position.coords.longitude + 'E');
      $('#lat').val(position.coords.latitude);
      $('#lon').val(position.coords.longitude);
    }

    navigator.geolocation.getCurrentPosition(callback);

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
