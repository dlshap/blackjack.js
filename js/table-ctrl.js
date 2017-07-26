document.addEventListener("DOMContentLoaded", function(event) {
  initTable();
  addClickListeners();
});

function addClickListeners() {
  document.getElementById("drill-pairs").addEventListener("click",
    function() {deckMixOptionChanged("pairs"); });
  document.getElementById("drill-hard").addEventListener("click",
    function() {deckMixOptionChanged("hard"); });
  document.getElementById("drill-soft").addEventListener("click",
    function() {deckMixOptionChanged("soft"); });
}

function deckMixOptionChanged(which) {
  showMsg(1, which);
}

function showMsg(msgNum, msg) {
  // display msg in message area: msg1 or msg2
  var msgId = "msg"+msgNum.toString();
  document.getElementById(msgId).innerHTML = msg;
}

function showCard(whichCard, cardFileName) {
  document.getElementById(whichCard).src = cardFileName;
}

function deal() {
  showMsg(1, "Dealing now...");
  gameController.deal();
}

function hit() {
  showMsg(1, "Hit me!");
  gameController.hit();
}

function stand() {
  document.getElementById("msg1").innerHTML = "Stand down";
  document.getElementById("msg2").innerHTML = "You better bust!"
}

function double() {
  document.getElementById("msg1").innerHTML = "Double Down";
}

function split() {
  document.getElementById("msg1").innerHTML = "Split 'em!";
}

function getOption(whichOption) {
  return document.getElementById(whichOption).checked;
}

function setOption(whichOption, value) {
  document.getElementById(whichOption).checked = value;
}
