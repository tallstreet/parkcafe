'use strict';

angular.module('parkcafeApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Menu',
      'link': '/'
    },{
      'title': 'Product',
      'link': '/product'
    },{
      'title': 'Order',
      'link': '/order'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
