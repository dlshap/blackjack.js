"use strict";

var shoe;

document.addEventListener("DOMContentLoaded", function(event) {
  initTable()
});

function initTable() {
  showCardBacks();
  setInitialOptions();
  prepareShoe();
}

function setInitialOptions() {
  setOption("drill-pairs", true);
}

function getOptions() {
  config.deckMix = [];
  if (getOption("drill-pairs")) {
    config.deckMix.push("pairs");
  }
  if (getOption("drill-hard")) {
    config.deckMix.push("hard");
  }
  if (getOption("drill-soft")) {
    config.deckMix.push("soft");
  }
}

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

var gameController = {
  dealACard: function(toWhere) {
    var nextCard = shoe.getCard();
    showCard(toWhere, nextCard);
    return nextCard;
  },
  cheatACard: function(firstCard, toWhere) {
    if (getOption("drill-pairs")) {
      var num = firstCard.getValue()[0];
      var suit = Math.floor(Math.random() * 4)+1;
      var nextCard = new Card(num, suit);
      showCard(toWhere, nextCard);
    }
  },
  deal: function() {
    getOptions();
    // Deal the dealer a card
    this.dealACard("dealerCard");
    // Deal players first card
    var firstCard = this.dealACard("playerCard1");
    // if only one deckMix option (drill), cheat the 2nd card
    if (config.deckMix.length === 1)
      this.cheatACard(firstCard, "playerCard2");
    else
      this.dealACard("playerCard2");
  }
};
