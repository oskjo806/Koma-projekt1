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
		if($scope.Filter == choice)
		{
			$scope.FilterEnabled = false;
		}
		else
		{
        $scope.Filter = choice;
		$scope.FilterEnabled = true;
		}
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
	  
	  $scope.idExists = function(id){
		if(getData(id))
		{	
			console.log("exists");
			return true;
		}
		else
		{	
			console.log("exists... not");
			return false;
		}
		}		
		$scope.buttonload = function(){
			var a = getExp();
			var b = 1000;
			while(a >= b){
				levelup(a,b);
				a = a-b;
				b += 1000;
			}
			var procent = Math.round( (a*100) / (b) );
			document.getElementById("testdemo").innerHTML = a +"/" + b + " EXP";
			
		}
		
		$scope.expLoad = function(){
			var a = getExp();
			var b = 1000;
			
			while(a >= b){
				levelup(a,b);
				a = a-b;
				b += 1000;
			}
			var procent = Math.round( (a*100) / (b) );
			
			var valeur = procent;
			$('.progress-bar').css('width', valeur+'%').attr('aria-valuenow', valeur);    
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




