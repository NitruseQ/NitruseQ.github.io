function rozmiar(value) {
document.getElementById('twitch-embed').style.width = value + "%";
document.getElementById('twitch-embed').style.height = value + "%";
}

function czat(value) {
document.getElementById('chat').style.width = value + "px";
szerokosc = window.innerWidth;
szerokosc2 = szerokosc - value;
szerokosc3 = szerokosc2 - 73;
szerokosc4 = szerokosc2 - 92;
szerokosc5 = szerokosc2 - 149;
szerokosc6 = szerokosc2 - 128;
szerokosc7 = szerokosc2 - 226;
szerokosc8 = szerokosc2 - 323;
document.getElementById('filmframe').style.width = szerokosc2 + "px";
document.getElementById('text').style.left = szerokosc3 + "px";
document.getElementById('switch').style.left = szerokosc5 + "px";
document.getElementById('switch2').style.left = szerokosc4 + "px";
document.getElementById('opcje').style.left = szerokosc6 + "px";
document.getElementById('ukryjstream').style.left = szerokosc7 + "px";
document.getElementById('zmiana').style.left = szerokosc8 + "px";
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
	document.getElementById('zmiana').style.display = "block";
  } else {
    document.getElementById('suwak').style.display = "none";
	document.getElementById('suwak2').style.display = "none";
	document.getElementById('switch').style.display = "none";
	document.getElementById('tlo').style.display = "none";
	document.getElementById('ukryjstream').style.display = "none";
	document.getElementById('opcje').style.color = "#808080";
	document.getElementById('zmiana').style.display = "none";
  }
}

function zmiana() {
	var zrodlo = prompt('wybierz źródło filmu, wpisz:\n"cda", bądź "youtube"\n*zmiana nastąpi tylko u Ciebie, u nikogo innego');
	if (zrodlo == "cda") {
		var id = prompt("wybrane źródło: " + zrodlo + "\nwprowadź id filmu\nzostaw pole puste, aby anulować");
		if ((id == "") || (id == null)) {
			return 0;
		}
		else {
			var akceptacja = confirm("url wybranego filmu to:\nhttps://www.cda.pl/video/" + id + "\npotwierdzasz?");
			if ((id == "") || (id == null)) {
				return 0;
			}
			else {
			if (akceptacja == true) {
				document.getElementById('filmframe').src = 'https://ebd.cda.pl/620x368/' + id;
			}
			else {
				return 0;
			}
			}
		}
	}
	if (zrodlo == "youtube") {
		var id = prompt("wybrane źródło: " + zrodlo + "\nwprowadź id filmu\nzostaw pole puste, aby anulować");
		if ((id == "") || (id == null)) {
			return 0;
		}
		else {
			var akceptacja = confirm("url wybranego filmu to:\nhttps://www.youtube.com/watch?v=" + id + "\npotwierdzasz?");
			if ((id == "") || (id == null)) {
				return 0;
			}
			else {
			if (akceptacja == true) {
				document.getElementById('filmframe').src = 'https://www.youtube.com/embed/' + id;
			}
			else {
				return 0;
			}
			}
		}
	}
}




























