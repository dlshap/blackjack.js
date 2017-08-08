var dealer = {
  dealerHand: new Hand(),
  playerHand: new Hand(),
  deal: function() {
    this.clearHands();
    this.dealDealerHand();
    this.dealPlayerHand();
    this.displayHands(this.dealerHand, this.playerHand);
  },
  displayHands: function(dealerHand, playerHand) {
    dealerHand.getCard(0).display("dealerCard");
    playerHand.getCard(0).display("playerCard1");
    playerHand.getCard(1).display("playerCard2");
  },
  getHand: function () {
    return this.dealerHand;
  },
  clearHands: function() {
    this.dealerHand.clearHand();
    this.playerHand.clearHand();
    player.clearHands();
  },
  dealDealerHand: function() {
    // for now, dealer only gets one card
    var card = this.dealFromShoe()
    this.dealerHand.addCard(card);
  },
  dealPlayerHand: function() {
    if (config.drillTypes.length() !== 1 && config.drillTypes.length() !== 2) {
      this.playerHand = this.dealNormal(this.playerHand);
      player.addHand(this.playerHand);
    }
    else {
      this.playerHand = drillDealer.dealCheatHand(this.playerHand);
      player.addHand(this.playerHand);
    }
  },
  dealFromShoe: function() {
    return shoe.getCard();
  },
  dealNormal: function(hand) {
    var card = this.dealFromShoe();
    hand.addCard(card);
    card = this.dealFromShoe();
    hand.addCard(card);
    return hand;
  },
  changeDrill: function(drillType, newValue) {
    config.drillTypes.change(drillType, newValue);
    shoe.loadShoe();
    shoe.shuffle();
  }
};
