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
  preLoadCardImages();
}

function setInitialDrillTypes() {
  tableUI.setDrillType("pairs", true);
  config.drillTypes.addDrillType("pairs");
  tableUI.setDrillType("hard", true);
  config.drillTypes.addDrillType("hard");
  tableUI.setDrillType("soft", true);
  config.drillTypes.addDrillType("soft");
}

function prepareShoe() {
  shoe = new Shoe(config.numOfDecks);
  shoe.shuffle();
}

function preLoadCardImages() {
  var i, j, card;
  var image = new Image();
  for (i = 1; i <= 13; i++) {
    for (j = 1; j <= 4; j++) {
      card = new Card(i, j);
      image.src = card.getFileName();
    }
  }
}
