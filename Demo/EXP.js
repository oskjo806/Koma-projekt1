var a = getExp();
var levelcounter = 1;
var b = 1000;

function load() {
	procent(a, b);
	document.getElementById("ding").innerHTML = levelcounter;
	
}

function procent(a, b) {
		
		while(a >= b){
			levelup(a,b);
			setExperience(a-b);
			b += 1000;
		}
		var procent = Math.round( (a*100) / (b) );
	var element = document.getElementById("demo");
	element.classList.add("p" + procent);
	document.getElementById("percent").innerHTML = a +"/" + b;
}

function levelup(a,b){
	levelcounter += 1;
}
