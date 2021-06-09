function openCity(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}

function chaos(level, spent, add) {
	let x = level;
	let y = spent;
	let total = x * 10;
	let current = total - y;
	current += add;
	current = Number(current);
	document.getElementById("chaosPoints").innerHTML =
		current + " Chaos Points available";
}

function skillPoint(level, other, spent) {
	let x = level;
	let y = spent;
	let z = other;
	let current = x + z - y;
	current = Number(current);
	document.getElementById("skill").innerHTML =
		Math.floor(current) + " SP available";
}

let John = {
	level: 26,
	SPspent: 33,
	auraSP: 28.6,
	CPspent: 240,
	CPadd: 32,
};

document.getElementById("levelTitle").innerHTML = "Level " + John.level;

let Character = new skillPoint(John.level, John.auraSP, John.SPspent);
Character = new chaos(John.level, John.CPspent, John.CPadd);

function gifChange() {
	setTimeout(changGIF, 3700);
}
function changGIF() {
	$(".castle").css(
		"background-image",
		"url('../Pictures/20191021_002631.gif')"
	);
}
