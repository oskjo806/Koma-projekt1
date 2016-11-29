var dataVarName = "MissionData";
var expVarName = "ExpValue";
var map = false;
var stringToJSON = "";

function saveData(varName, value){
	if (typeof(Storage) !== "undefined") {
    	localStorage.setItem(varName, value);
    	return true;
	} else {
		console.log("localStorage not suported");
    	return false;
	}
}

function getData(varName){
	var data = "";
	console.log(data);
	if (typeof(Storage) !== "undefined") {
    	data = localStorage.getItem(varName);
    	if(data === null){
    		return "";
    	}
	} else {
		console.log("localStorage not suported");
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

function getMissionData(key){
	if(map == false){
		loadMapFromJSON();
	}
	return map.get(key);
}

function writeDataPoint(value, key, map){
	if(stringToJSON == ""){
		stringToJSON = "[";
	}else{
		stringToJSON = stringToJSON + ", "
	}
	stringToJSON = stringToJSON + '{"t":"' + key + '" , "d":"' + value + '"}'
}

function saveMissionData(){
	map.forEach(writeDataPoint);
	stringToJSON = stringToJSON + " ]";
	saveData(dataVarName, stringToJSON);
	stringToJSON = "";
}

function writeMission(key, value){
	if(map == false){
		loadMapFromJSON();
	}
	map.set(key, value);
}