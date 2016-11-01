'use strict';

// Define the 'myApp.weatherService' module
angular.module('myApp.weatherService', ['ngResource']);

angular.module('myApp.weatherService').
  factory('weatherForecast', ['$resource','$timeout',
    function($resource) {
      return $resource('app/data/:location.json', {}, {
          query: {
            method: 'GET',
            params: {location: '@location'},
            isArray: true
          }
      });
    }
  ]);
