document.addEventListener("DOMContentLoaded", function(event) {
  initTable();
  addClickListeners();
});


function addClickListeners () {
  document.getElementById("drill-pairs").addEventListener("click",
    function() {optionChanged("drill-pairs"); });
  document.getElementById("drill-hard").addEventListener("click",
    function() {optionChanged("drill-hard"); });
  document.getElementById("drill-soft").addEventListener("click",
    function() {optionChanged("drill-soft"); });
}

function optionChanged (optionId) {
  var optionMap = {
    "drill-pairs": "pairs",
    "drill-hard": "hard",
    "drill-soft": "soft"
  };
  var optionClicked = document.getElementById(optionId).checked;
  config.drillTypes.change(optionMap[optionId], optionClicked);
}

function deal() {
  tableUI.showMsg(1, "Dealing now...");
  gameController.deal();
}

function hit() {
  gameController.hit();
}

function stand() {
  gameController.stand();
}

function double() {
  gameController.double();
}

function split() {
  gameController.split();
}
