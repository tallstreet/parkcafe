'use strict';

angular.module('parkcafeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('status', {
        url: '/status',
        templateUrl: 'app/main/status.html',
        controller: 'StatusCtrl'
      })
      .state('item', {
        url: '/product/:id',
        templateUrl: 'app/main/product.html',
        controller: 'ProductCtrl'
      });
  });
