function saveData(String v, String s){
	if (typeof(Storage) !== "undefined") {
    	localStorage.setItem(v, s);
    	return true;
	} else {
    	return false;
	}
}

function loadData(){
	if (typeof(Storage) !== "undefined") {
    	// Code for localStorage/sessionStorage.
	} else {
    	return false;
	}
}