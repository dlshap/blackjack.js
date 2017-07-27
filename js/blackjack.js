"use strict";

var shoe;

function initTable() {
  showCardBacks();
  setInitialOptions();
  prepareShoe();
}

function setInitialOptions() {
  setOption("drill-pairs", true);
}

// function buildOptions() {
//   config.deckMix = [];
//   if (getOption("drill-pairs")) {
//     config.deckMix.push("pairs");
//   }
//   if (getOption("drill-hard")) {
//     config.deckMix.push("hard");
//   }
//   if (getOption("drill-soft")) {
//     config.deckMix.push("soft");
//   }
// }

function showCardBacks() {
  var card = new Card(0,0);
  displayCard(card, "dealerCard");
  for (var i = 1; i <= 2; i++) {
    displayCard(card, "playerCard" + i);
  }
}

function prepareShoe() {
  shoe = new Shoe(config.noOfDecks);
  shoe.shuffle();
}

var gameController = {
  dealACard: function(toWhere) {
    var card = shoe.getCard();
    displayCard(card, toWhere);
    return card;
  },
  cheatACard: function(num) {
      var suit = Math.floor(Math.random() * 4)+1;
      var cheatCard = new Card(num, suit);
      return cheatCard;
  },
  dealDealerCard: function() {
    // Deal the dealer a card
    this.dealACard("dealerCard");
  },
  deal: function() {
    this.dealDealerCard();
    this.dealPlayerHand();
  },
  dealPlayerHand: function() {
    if (config.options.length() === 1)
      this.dealCheat();
    else
      this.dealNormal();
  },
  dealCheat: function() {
    if (config.options.findOption("pairs") !== -1)
      this.dealPair();
    else if (config.options.findOption("soft") !== -1)
      this.dealSoft();
    else dealNormal();
  },
  dealNormal: function() {
    this.dealACard("playerCard1");
    this.dealACard("playerCard2");
  },
  dealPair: function() {
    var card = this.dealACard("playerCard1");
    displayCard(card, "playerCard1");
    card = this.cheatACard(card.getValue()[0]);
    displayCard(card, "playerCard2");
  },
  dealSoft: function() {
    var card = this.cheatACard(1);
    displayCard(card, "playerCard1");
    this.dealACard("playerCard2");
  }
};
