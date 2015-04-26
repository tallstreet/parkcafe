'use strict';

angular.module('parkcafeApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Menu',
      'link': '/'
    },{
      'title': 'Product',
      'link': '/product/1'
    },{
      'title': 'Status',
      'link': '/status'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
