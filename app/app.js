'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.menu',
  'myApp.weather',
  'myApp.forecast',
  'myApp.weatherService',
  'myApp.forecastDetails',
  'ngAnimate'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/weather'});
}]);