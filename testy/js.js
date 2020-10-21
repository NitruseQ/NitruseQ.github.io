function rozmiar(value) {
document.getElementById('twitch-embed').style.width = value + "%";
document.getElementById('twitch-embed').style.height = value + "%";
}

function czat(value) {
document.getElementById('chat_embed').style.width = value + "px";
szerokosc = window.innerWidth;
szerokosc2 = szerokosc - value;
document.getElementById('filmframe').style.width = szerokosc2 + "px";
document.getElementById('text').style.left = szerokosc2 + "px";
}

function klik() {
  var checkBox = document.getElementById("switch");
  if (checkBox.checked == true){
    document.getElementById('twitch-embed').style.display = "block";
  } else {
    document.getElementById('twitch-embed').style.display = "none";
  }
}

function klik2() {
  var checkBox2 = document.getElementById("switch2");
  if (checkBox2.checked == true){
    document.getElementById('suwak').style.display = "block";
	document.getElementById('suwak2').style.display = "block";
	document.getElementById('switch').style.display = "block";
  } else {
    document.getElementById('suwak').style.display = "none";
	document.getElementById('suwak2').style.display = "none";
	document.getElementById('switch').style.display = "none";
  }
}