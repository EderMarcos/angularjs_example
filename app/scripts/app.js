'use strict';

angular
  .module('ngModule', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'components/home.html',
        controller: 'HomeController'
      })
      // .when('/about', {
      //   templateUrl: 'views/about.html',
      //   controller: 'AboutController',
      //   controllerAs: 'about'
      // })
      // .when('/contact', {
      //   templateUrl: 'views/contact.html',
      //   controller: 'ContactController',
      //   controllerAs: 'contact'
      // })
      .otherwise({
        redirectTo: '/'
      });
  });
