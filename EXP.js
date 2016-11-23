
var a = 1560;
var levelcounter = 1;
var b = 1000;

function load() {
	procent(a, b);
	document.getElementById("lervel").innerHTML = levelcounter;
}

function procent(a, b) {
		
		while(a >= b){
			levelup(a,b);
			a = a- b;
			b += 500;
		}
		var procent = Math.round( (a*100) / (b) );
		console.log(procent);
    //return procent;
	var element = document.getElementById("demo");
	element.classList.add("p" + procent);
	document.getElementById("percent").innerHTML = procent + " %";
}

function levelup(a,b){
	levelcounter += 1;
	document.getElementById("ding").innerHTML = levelcounter;
}
