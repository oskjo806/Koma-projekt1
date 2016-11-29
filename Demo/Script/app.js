var dataVarName = "MissionData";
var expVarName = "ExpValue";

	myApp =angular.module('myApp',[]);
    myApp.controller('myController',function($scope,$http) {
      $http.get('Data/Data.json').success(function(response) {
        $scope.myData =response;
      });
      $scope.Filter = 'Daily';
	  $scope.FilterEnabled = false;
      $scope.Filterchoice = function(choice){
        $scope.Filter = choice;
		$scope.FilterEnabled = true;
      }
	  $scope.Filterchange = function(change, exp){
		if(change == "Completed"){
			var currentexp = parseInt(getExp());
			var completedexp = currentexp + parseInt(exp);
			setExperience(completedexp);
			completedexp = "";
		}
	  }
	  
	  $scope.write = function(id){
		saveData(id, 1);
		console.log(id);
		console.log(getData(id));
	
		
	  }
	  
    });

function saveData( varName, value){
	if (typeof(Storage) !== "undefined") {
    	localStorage.setItem(varName, value);
    	return true;
	} else {
    	return false;
	}
}

function getData(varName){
	var data = "";

	if (typeof(Storage) !== "undefined") {
    	data = localStorage.getItem(varName);
    	if(data === null){
    		return "";
    	}
	} else {
    	return false;
	}
	return data;
}

function getExp(){
	var experience = getData(expVarName);
	if(experience == ""){
		saveData(expVarName, 0);
		return 0;
	}
	return parseInt(experience);
}

function setExperience(exp){
	saveData(expVarName, exp);
}




