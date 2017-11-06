"use strict";

var shoe;       //figure out how to make this local sometime
var tableUI;    //ditto
var player;  //one player only for now


function blackjack() {
    initUI();
    startGame();
}

function initUI() {
    tableUI = new TableUI();
    tableUI.loadScreenElements();
}

function startGame() {
    setInitialDrillTypes();
    prepareShoe();
    addPlayer();
}

function prepareShoe() {
    shoe = new Shoe(config.numOfDecks);
    shoe.shuffle();
}

function addPlayer() {
    player = new Player();
}

function setInitialDrillTypes() {
    if (config.drillTypes.findDrillType("pairs") !== -1)
        tableUI.setDrillType("pairs", true);
    if (config.drillTypes.findDrillType("hard") !== -1)
        tableUI.setDrillType("hard", true);
    if (config.drillTypes.findDrillType("soft") !== -1)
        tableUI.setDrillType("soft", true);
}

