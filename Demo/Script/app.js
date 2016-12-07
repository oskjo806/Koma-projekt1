var dataVarName = "MissionData";
var expVarName = "ExpValue";
var map = false;
var stringToJSON = "";

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
	$scope.Filterchange = function(counter, counterMax, exp){
		if(counter >= counterMax){
			var currentexp = parseInt(getExp());
			var completedexp = currentexp + parseInt(exp);
			setExperience(completedexp);
			completedexp = "";
		}
	}

	$scope.writeMission = function(key, value){
		if(map == false){
			loadMapFromJSON();
		}
		map.set(key, String(value));
		saveMissionData();
		//console.log("write: " + key + " " + value);
	}

	$scope.getMissionData = function(key){
		if(map == false){
			loadMapFromJSON();
		}
		//console.log("read " + key + " " + map.get(key));
		if(!map.get(key)){
			return 0;
		}
		return parseInt(map.get(key));
	}

	$scope.buttonload = function(){
		var a = getExp();
		var b = 1000;
		var lvl = 1;
		while(a >= b){
			++lvl;
			levelup(a,b);
			a = a-b;
			b += 1000;
		}
		var procent = Math.round( (a*100) / (b) );
		document.getElementById("testdemo").innerHTML = a +"/" + b + " EXP";
		document.getElementById("testlevel").innerHTML = "level " + lvl;
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

function loadMapFromJSON(){
	//load mission data into map
	var data = getData(dataVarName);

	if(data == ""){//if local variable "data" does not exist
		data = "[ {} ]";
		saveData(dataVarName, data);
	}

	var json = JSON.parse(data);
	map = new Map();
	
	for(var i = 0; i < json.length; ++i){
		map.set(json[i].t, json[i].d);
	}
}

function writeDataPoint(value, key, map){
	if(stringToJSON == ""){
		stringToJSON = "[";
	}else{
		stringToJSON = stringToJSON + ", ";
	}
	stringToJSON = stringToJSON + '{"t":"' + key + '" , "d":"' + value + '"}';
}

function saveMissionData(){
	map.forEach(writeDataPoint);
	stringToJSON = stringToJSON + " ]";
	saveData(dataVarName, stringToJSON);
	stringToJSON = "";
}

function clearMissionData(){
	saveData(dataVarName, "");
}