'use strict';

angular.module('parkcafeApp')
  .controller('OrderCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $scope.buy = function(){
      // do something
      console.log("Button pressed");
    };

    // braintree.setup('your-client-token', 'dropin', {
    //   container: 'dropin-container'
    // });
    //
  });
