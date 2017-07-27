var dealer = {
  deal: function() {
    this.dealDealerCard();
    this.dealPlayerHand();
  },
  dealDealerCard: function() {
    // Deal the dealer a card
    this.dealACard("dealerCard");
  },
  dealPlayerHand: function() {
    if (config.drillTypes.length() === 1)
      this.dealCheat();
    else
      this.dealNormal();
  },
  dealACard: function(toWhere) {
    var card = shoe.getCard();
    card.display(toWhere);
    return card;
  },
  cheatACard: function(num) {
      var suit = Math.floor(Math.random() * 4)+1;
      var cheatCard = new Card(num, suit);
      return cheatCard;
  },
  dealCheat: function() {
    if (config.drillTypes.findDrillType("pairs") !== -1)
      this.dealPair();
    else if (config.drillTypes.findDrillType("soft") !== -1)
      this.dealSoft();
    else dealNormal();
  },
  dealNormal: function() {
    this.dealACard("playerCard1");
    this.dealACard("playerCard2");
  },
  dealPair: function() {
    var card = this.dealACard("playerCard1");
    card.display("playerCard1");
    card = this.cheatACard(card.getValue()[0]);
    card.display("playerCard2");
  },
  dealSoft: function() {
    var card = this.cheatACard(1);
    card.display("playerCard1");
    this.dealACard("playerCard2");
  }
};
