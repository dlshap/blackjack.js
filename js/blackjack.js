"use strict";

var shoe;  //figure out how to make this local sometime

function blackJack() {
    initTable();
    prepareShoe();
}

function prepareShoe() {
    shoe = new Shoe(config.numOfDecks);
    shoe.shuffle();
}

