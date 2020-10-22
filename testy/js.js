function rozmiar(value) {
document.getElementById('twitch-embed').style.width = value + "%";
document.getElementById('twitch-embed').style.height = value + "%";
}

function czat(value) {
document.getElementById('chat_embed').style.width = value + "px";
szerokosc = window.innerWidth;
szerokosc2 = szerokosc - value;
szerokosc3 = szerokosc2 - 73;
szerokosc4 = szerokosc2 - 92;
szerokosc5 = szerokosc2 - 149;
szerokosc6 = szerokosc2 - 128;
szerokosc7 = szerokosc2 - 226;
document.getElementById('filmframe').style.width = szerokosc2 + "px";
document.getElementById('text').style.left = szerokosc3 + "px";
document.getElementById('switch').style.left = szerokosc5 + "px";
document.getElementById('switch2').style.left = szerokosc4 + "px";
document.getElementById('opcje').style.left = szerokosc6 + "px";
document.getElementById('ukryjstream').style.left = szerokosc7 + "px";
}

function klik() {
  var checkBox = document.getElementById("switch");
  if (checkBox.checked == true){
    document.getElementById('twitch-embed').style.display = "none";
  } else {
    document.getElementById('twitch-embed').style.display = "block";
  }
}

function klik2() {
  var checkBox2 = document.getElementById("switch2");
  if (checkBox2.checked == true){
    document.getElementById('suwak').style.display = "block";
	document.getElementById('suwak2').style.display = "block";
	document.getElementById('switch').style.display = "block";
	document.getElementById('tlo').style.display = "block";
	document.getElementById('ukryjstream').style.display = "block";
	document.getElementById('opcje').style.color = "#ffffff";
  } else {
    document.getElementById('suwak').style.display = "none";
	document.getElementById('suwak2').style.display = "none";
	document.getElementById('switch').style.display = "none";
	document.getElementById('tlo').style.display = "none";
	document.getElementById('ukryjstream').style.display = "none";
	document.getElementById('opcje').style.color = "#808080";
  }
}