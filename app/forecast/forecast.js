'use strict';

angular.module('myApp.forecast', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/forecast', {
    templateUrl: 'app/forecast/forecast.html',
    controller: 'ForecastCtrl'
  });

}])
.controller('ForecastCtrl', ["$scope", 'weatherForecast', function($scope, weatherForecast) {

  $scope.changeLocation = function(){
    $scope.weatherData = null;
    weatherForecast.query({location: $scope.location}, function(result){
      $scope.weatherData = result[0];
    });
  };

  $scope.location = 'campus-nkpg';
  $scope.changeLocation();

}]);