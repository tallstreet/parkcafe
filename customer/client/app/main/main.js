'use strict';

angular.module('parkcafeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('order', {
        url: '/order',
        templateUrl: 'app/main/order.html',
        controller: 'OrderCtrl'
      })
      .state('item', {
        url: '/product/:id',
        templateUrl: 'app/main/product.html',
        controller: 'ProductCtrl'
      });
  });
