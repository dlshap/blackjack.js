"use strict";

var shoe;  //figure out how to make this local sometime
var tableUI = new TableUI();

function blackjack() {
    loadScreenElements();
    startGame();
}

function loadScreenElements() {
    showCardBacks();
    setInitialDrillTypes();
    preLoadCardImages();
    tableUI.addListeners();
}

function startGame() {
    prepareShoe();
}

function prepareShoe() {
    shoe = new Shoe(config.numOfDecks);
    shoe.shuffle();
}

function showCardBacks() {
    //do this first so no delay on screen
    var card = new Card(0, 0);
    card.display("dealerCard");
    for (var i = 1; i <= 2; i++) {
        card.display("playerCard" + i);
    }
}

function setInitialDrillTypes() {
    if (config.drillTypes.findDrillType("pairs") !== -1)
        tableUI.setDrillType("pairs", true);
    if (config.drillTypes.findDrillType("hard") !== -1)
        tableUI.setDrillType("hard", true);
    if (config.drillTypes.findDrillType("soft") !== -1)
        tableUI.setDrillType("soft", true);
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