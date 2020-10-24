var w = window.innerWidth;
w2 = w / 2;
if (w2 <= 500) {
document.getElementById('suwak2').max = "500";
}
if (w2 > 500) {
document.getElementById('suwak2').max = w2;
}
var h = window.innerHeight;
h2 = h / 3;
if (h2 <= 300) {
document.getElementById('suwak3').max = "300";
}
if (h2 > 300) {
document.getElementById('suwak3').max = h2;
}