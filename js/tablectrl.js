var player = new Player();  //one player only for now

function optionChanged (optionId) {
  var optionMap = {
    "drill-pairs": "pairs",
    "drill-hard": "hard",
    "drill-soft": "soft"
  };
  var optionClicked = document.getElementById(optionId).checked;
  dealer.changeDrill(optionMap[optionId], optionClicked);
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

function hint() {
  gameController.hint();
}
