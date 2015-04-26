'use strict';

angular.module('parkcafeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'ngMaterial'
])
  .constant('clientTokenPath', '/path-or-url-to-your-client-token')
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    $mdThemingProvider.theme('default')
      .primaryPalette('light-blue')
      .accentPalette('orange');

  });
