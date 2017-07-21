function deal() {
 document.getElementById("msg1").innerHTML = "Dealing";  document.getElementById("msg2").innerHTML = "...";
}

function hit() {
  document.getElementById("msg1").innerHTML = "Hit me!";
}

function stand() {
  document.getElementById("msg1").innerHTML = "Stand";
  document.getElementById("msg2").innerHTML = "You better bust!"
}

function double() {
  document.getElementById("msg1").innerHTML = "Double Down";
}

function split() {
  document.getElementById("msg1").innerHTML = "Split 'em!";
}
