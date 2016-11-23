String dataVarName = "MissionData";
String expVarName = "ExpValue";

function saveData(String varName, String value){
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

function createMission(mission){
	
}

function getAllMissionData(){
	var data = JSON.parse(getData(dataVarName));
	var missions = new Mission[data.length];

	for(int i = 0; i < data.length; ++i){
		missions[i] = createMission(data.missions[i]);
	}
	return missions;
}

function getExp(){
	var experience = getData(expVarName);
	if(experience == ""){
		saveData(expVarName, 0);
		return 0;
	}
	return parseInt(experience);
}

function setExperience(int exp){
	saveData(expVarName, exp);
}