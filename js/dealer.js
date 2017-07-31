var dealer = {
  dealerHand: new Hand(),
  playerHand: new Hand(),
  deal: function(player) {
    this.clearHands(player);
    this.dealDealerHand();
    this.dealPlayerHand(player);
  },
  getHand: function () {
    return this.dealerHand;
  },
  clearHands: function(player) {
    this.dealerHand.clearHand();
    player.clearHands();
  },
  dealDealerHand: function() {
    // for now, dealer only gets one card
    var card = this.dealFromShoe("dealerCard")
    this.dealerHand.addCard(card);
  },
  dealPlayerHand: function(player) {
    if (config.drillTypes.length() !== 1 && config.drillTypes.length() !== 2) {
      player.addHand(this.dealNormal(this.playerHand));
    }
    else {
      player.addHand(cheatDealer.dealCheat(this.playerHand));
    }
  },
  dealFromShoe: function(toWhere) {
    var card = shoe.getCard();
    card.display(toWhere);
    return card;
  },
  dealNormal: function(hand) {
    var card = this.dealFromShoe("playerCard1");
    hand.addCard(card);
    card = this.dealFromShoe("playerCard2");
    hand.addCard(card);
    return hand;
  },
  changeDrill: function(drillType, newValue) {
    config.drillTypes.change(drillType, newValue);
    shoe.loadShoe();
    shoe.shuffle();
  }
};
