'use strict';

angular.module('parkcafeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('item', {
        url: '/product',
        templateUrl: 'app/main/product.html',
        controller: 'ProductCtrl'
      });
  });
