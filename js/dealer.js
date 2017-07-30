var dealer = {
  deal: function() {
    this.dealDealerCard();
    this.dealPlayerHand();
  },
  dealDealerCard: function() {
    this.dealACard("dealerCard");
  },
  dealPlayerHand: function() {
    if (config.drillTypes.length() === 1 || config.drillTypes.length() === 2)
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
      var suit = Math.floor(Math.random() * 4) +1;
      var cheatCard = new Card(num, suit);
      return cheatCard;
  },
  dealCheat: function() {
    var drillTypeIndex = Math.floor(Math.random() * config.drillTypes.length() + 1);
    var drillType = config.drillTypes.getDrillType(drillTypeIndex);
    switch (drillType) {
      case "pairs":
        this.dealPair();
        break;
      case "soft":
        this.dealSoft();
        break;
      default:
        this.dealHard();
    }
  },
  dealNormal: function() {
    this.dealACard("playerCard1");
    this.dealACard("playerCard2");
  },
  dealPair: function() {
    var card = this.dealACard("playerCard1");
    card.display("playerCard1");
    // deal 2nd card same as first
    card = this.cheatACard(card.getValue()[0]);
    card.display("playerCard2");
  },
  dealSoft: function() {
    // deal an ace
    var card;
    card = this.cheatACard(1);
    card.display("playerCard1");
    // no ace
    var num = Math.floor(Math.random() * 12) +2;
    card = this.cheatACard(num);
    card.display("playerCard2");
  },
  dealHard: function() {
      //no Aces (1)
      var firstNum, secondNum;
      firstNum = secondNum = Math.floor(Math.random() * 12) +2;
      this.cheatACard(firstNum).display("playerCard1");
      // no repeats (pairs)
      while (firstNum === secondNum) {
        secondNum = Math.floor(Math.random() * 12) +2;
      }
      this.cheatACard(secondNum).display("playerCard2");
  },
  changeDrill: function() {
    config.drillTypes.change(optionMap[optionId], optionClicked);
    shoe.loadShoe();
    shoe.shuffle();
  }
};
