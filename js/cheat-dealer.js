var cheatDealer = {
  dealCheat: function(hand) {
    this.cheatHand.clearHand();
    var drillTypeIndex = Math.floor(Math.random() * config.drillTypes.length() + 1);
    var drillType = config.drillTypes.getDrillType(drillTypeIndex);
    switch (drillType) {
      case "pairs":
        return this.dealPair(hand);
        break;
      case "soft":
        return this.dealSoft(hand);
        break;
      default:
        return this.dealHard(hand);
    }
  },
  makeSpecificCard: function(num) {
      var suit = Math.floor(Math.random() * 4) +1;
      var cheatCard = new Card(num, suit);
      return cheatCard;
  },
  dealPair: function(hand) {
    var card = shoe.getCard();
    card.display("playerCard1");
    hand.addCard(card);
    // deal 2nd card same as first
    card = this.makeSpecificCard(card.getValue()[0]);
    card.display("playerCard2");
    hand.addCard(card);
  },
  dealSoft: function(hand) {
    // deal an ace
    var card;
    card = this.makeSpecificCard(1);
    card.display("playerCard1");
    hand.addCard(card);
    // no ace
    var num = Math.floor(Math.random() * 12) +2;
    card = this.makeSpecificCard(num);
    card.display("playerCard2");
    hand.addCard(card);
  },
  dealHard: function(hand) {
      //no Aces (1)
      var card, firstNum, secondNum;
      firstNum = secondNum = Math.floor(Math.random() * 12) +2;
      card = this.makeSpecificCard(firstNum).display("playerCard1");
      hand.addCard(card);
      // no repeats (pairs)
      while (firstNum === secondNum) {
        secondNum = Math.floor(Math.random() * 12) +2;
      }
      card = this.makeSpecificCard(secondNum).display("playerCard2");
      hand.addCard(card);
  }
}
