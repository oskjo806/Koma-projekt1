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
	//to-do
}

function getAllMissionData(){
	var data = JSON.parse(getData(dataVarName));
	Mission missions = new Mission[data.length];

	for(int i = 0; i < data.length; ++i){
		missions[i] = createMission(data.missions[i]);
	}
	return missions;
}

function getExp(){
	String experience = getData(expVarName);
	if(experience == ""){
		saveData(expVarName, 0);
		return 0;
	}
	return parseInt(experience);
}

function setExperience(int exp){
	saveData(expVarName, exp);
}