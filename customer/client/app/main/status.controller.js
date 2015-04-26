'use strict';

angular.module('parkcafeApp')
  .controller('StatusCtrl', function ($scope, $http, $location) {
    $scope.awesomeThings = [];
    $scope.buttonVisible = false;

    $scope.confirmationId = $location.path().split('/')[2];

    function callback(position) {
      console.log('located at '+ position.coords.latitude + 'N '+ position.coords.longitude + 'E');

      $http.post('/order', {
        'lat': position.coords.latitude,
        'lon': position.coords.longitude,
        'order': 'icecreme',
        'id': $scope.confirmationId}).success(function(response) {
        console.log(response);
      });
    }

    navigator.geolocation.getCurrentPosition(callback);


  });
