'use strict';

angular.module('parkcafeApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Menu',
      'link': '/'
    },{
      'title': 'Order',
      'link': '/product'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
