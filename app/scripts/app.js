'use strict';

angular
  .module('ngModule', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/components/home.html',
        controller: 'HomeController'
      })
      .when('/login', {
        templateUrl: 'views/components/login.html',
        controller: 'LoginController'
      })
      .when('/about', {
        templateUrl: 'views/components/about.html',
        controller: 'AboutController'
      })
      .when('/contact', {
        templateUrl: 'views/components/contact.html',
        controller: 'ContactController'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
