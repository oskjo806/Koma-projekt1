'use strict';

// Define the `forecastDetails` module
angular.module('myApp.forecastDetails', []);


// Register `forecastDetails` directive, along with its associated template
angular.module('myApp.forecastDetails').directive('forecastDetails', function(){
        var forecastDetailsDirective = {
            restrict: "E",
            scope:{
                forecast: '<'
            },
            replace: true,
            templateUrl: "app/components/forecast-details/forecast-details.html"
        };
        return forecastDetailsDirective;
    });
