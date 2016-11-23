var dataVarName = "MissionData";
var expVarName = "ExpValue";

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
	console.log(data);
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