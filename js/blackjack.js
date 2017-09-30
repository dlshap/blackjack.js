"use strict";

var shoe;  //figure out how to make this local sometime

function blackJack() {
    prepareShoe();
}

function prepareShoe() {
    shoe = new Shoe(config.numOfDecks);
    shoe.shuffle();
}

