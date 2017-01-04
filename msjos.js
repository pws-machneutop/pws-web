/* global net */
/* global command */
/* global grained */

function onElementHeightChange(elm, callback){
    var lastHeight = elm.scrollHeight, newHeight;
    (function run(){
        newHeight = elm.scrollHeight;
        if( lastHeight != newHeight )
            callback();
        lastHeight = newHeight;

        elm.onElementHeightChangeTimer = setTimeout(run, 10);
    })();
}

function printText(t) {
	var text = document.createElement("div");
	var invoervak = document.getElementById("tv");
	text.className = "dostext";
	text.innerHTML = '<table border="0"><tr><td>'+t+'</td></tr></table>';
	invoervak.parentNode.insertBefore(text, invoervak);
}

function showText(id, delay) {
	var elem = document.getElementById(id);
	setTimeout(function() {
		elem.style.visibility = 'visible';
		$("#menu").focus();
	}, delay * 1000);
}

function keepSpammingJos() {
	setInterval(printText.bind(printText, "JOS IS GEWELDIG"), 20);
}

function loadPlugins() {
	command.add("willie", function() { window.open("http://wilcostam.werenict.nl/", "_blank"); }, "Opent wilco's pagina");
	command.add("jp", function() { window.open("http://jessepronk.werenict.nl/", "_blank"); }, "Opent JP's pagina");
	command.add("css1", function() { window.open("css1.html", "_blank"); }, "Opent opdracht 1");
	command.add("css2", function() { window.open("css2.html", "_blank"); }, "Opent opdracht 2");
	command.add("css2a", function() { window.open("css2a.html", "_blank"); }, "Opent opdracht 2a");
	command.add("css3a", function() { window.open("css3a.html", "_blank"); }, "Opent opdracht 3a");
	command.add("css3", function() { window.open("css3.html", "_blank"); }, "Opent opdracht 3");
	command.add("css4", function() { window.open("css4.html", "_blank"); }, "Opent opdracht 3");
	command.add("css4a", function() { window.open("css4a.html", "_blank"); }, "Opent opdracht 3");	
	command.add("css5", function() { window.open("css5.html", "_blank"); }, "Opent opdracht 3");
	command.add("css5ii", function() { window.open("css5ii.html", "_blank"); }, "Opent opdracht 3");
	command.add("css5div", function() { window.open("css5div.html", "_blank"); }, "Opent opdracht 3");
	command.add("css6", function() { window.open("css6.html", "_blank"); }, "Opent opdracht 3");
	command.add("opdracht-css1", function() { window.open("opdracht-css1.html", "_blank"); }, "Opent opdracht 3");
	command.add("oefentoets1", function() { window.open("oefentoets1.html", "_blank"); }, "Opent opdracht 3");
	command.add("float-oefening", function() { window.open("float-oefening.html", "_blank"); }, "Opent opdracht 3");
	command.add("css9", function() { window.open("css9.html", "_blank"); }, "Opent opdracht 3");
	command.add("goegel", function() { window.open("http://www.google.com", "_blank"); }, "Opent Google");
	command.add("go64", function() { window.open("/go64/c64.html"); }, "Opent c64");
	command.add("pws", function() { window.open("/pws/pws.html"); }, "Opent pws");
	command.add("martin_marnix_boudewijn", function() { window.open("http://maximvandenberg.werenict.nl/", "_blank"); }, "Opent maxim's pagina");
}

function setupDom() {
	showText('starttext', 0.1);
	showText('c', 1.0);
	showText('j', 2.0);
	showText('dirlist', 2.4);
	showText('tv', 2.4);
}

$(document).ready(function() {
	loadPlugins();
	setupDom();
	
	var options = {
		"animate": true,
		"patternWidth": 396.05,
		"patternHeight": 365.89,
		"grainOpacity": 0.02,
		"grainDensity": 1,
		"grainWidth": 3.44,
		"grainHeight": 3.44
	}
	grained("#elemntId", options);
	
	var terminal = document.getElementById("terminal");
	onElementHeightChange(terminal, function() {
		console.log("Detected height change. Scrolling...");
		terminal.scrollTop = terminal.scrollHeight;
	});
});

function checkIt() {
	var cmd = document.getElementById("menu").value.toLowerCase();
	command.parse(cmd);
}