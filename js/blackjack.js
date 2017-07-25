"use strict";

var shoe;

document.addEventListener("DOMContentLoaded", function(event) {
  initTable()
});

function showCardBacks() {
  var card = new Card(0,0);
  showCard("dealerCard", card);
  for (var i = 1; i <= 2; i++) {
    showCard("playerCard"+i,card);
  }
}

function prepareShoe() {
  shoe = new Shoe(config.noOfDecks);
  shoe.shuffle();
}

function initTable() {
  showCardBacks();
  prepareShoe();
}

var tableController = {
  deal: function() {
    var i, nextCard;
    nextCard = shoe.getCard();
    showCard("dealerCard", nextCard);
    for (i = 1; i <= 2; i++) {
      nextCard = shoe.getCard();
      showCard("playerCard" + i, nextCard);
    }
  }
};
