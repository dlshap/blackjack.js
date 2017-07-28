"use strict";

var shoe;  //figure out how to make this local sometime

function showCardBacks() {
  //do this first so no delay on screen
  var card = new Card(0,0);
  card.display("dealerCard");
  for (var i = 1; i <= 2; i++) {
    card.display("playerCard" + i);
  }
}

function initTable() {
  showCardBacks();
  setInitialDrillTypes();
  prepareShoe();
}

function setInitialDrillTypes() {
  tableUI.setDrillType("drill-pairs", true);
  config.drillTypes.addDrillType("pairs");
}

function prepareShoe() {
  shoe = new Shoe(config.noOfDecks);
  shoe.shuffle();
}
