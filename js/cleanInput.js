var inputfocused = "";
document.getElementById("search").onclick = limpiaCampo;
var elements = document.querySelectorAll("input[type='search']");
for (var i = 0; i < elements.length; i++) {
elements[i].addEventListener("focus", function() {
inputfocused = this;
});
}

function limpiaCampo() {
inputfocused.value = "";
}
