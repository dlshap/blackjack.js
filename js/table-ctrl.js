document.addEventListener("DOMContentLoaded", function(event) {
  initTable();
  addClickListeners();
});

function addClickListeners() {
  document.getElementById("drill-pairs").addEventListener("click",
    function() {optionChanged("drill-pairs"); });
  document.getElementById("drill-hard").addEventListener("click",
    function() {optionChanged("drill-hard"); });
  document.getElementById("drill-soft").addEventListener("click",
    function() {optionChanged("drill-soft"); });
}

function optionChanged(optionId) {
  var optionClicked = getOption(optionId);
  switch (optionId) {
    case "drill-pairs":
      changeOptions("pairs", optionClicked);
      break;
    case "drill-hard":
      changeOptions("hard", optionClicked);
      break;
    case "drill-soft":
      changeOptions("soft",optionClicked);
      break;
  }
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
