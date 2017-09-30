function Hand() {
  var cards = [];
  this.addCard = function (card) {
    cards.push(card);
  };
  this.getCard = function (i) {
    return cards[i];
  };
  this.nextCard = function () {
    return cards.pop();
  };
  this.isHoldingCard = function (card) {
    for (var i = 0; i < cards.length; i++) {
      if (cards[i].exactlyMatches(card)) return true;
    }
    return false;
  };
  this.clearHand = function () {
    cards = [];
  };
  this.numOfCards = function() {
    return cards.length;
  };
  this.handTotal = function() {
    // total face value (10,J,Q,K = 10, Ace=1)
    var i, total = 0;
    for (i = 0; i < cards.length; i++) {
      total += cards[i].getRank();
    }
    return total;
  };
  this.handHighTotal = function() {
    // same as handTotal but Ace = 11
    var i, total = 0;
    for (i = 0; i < cards.length; i++) {
      total += cards[i].getHighRank();
    }
    if (total === 22)
      return 12;
    else
      return total;
  };
  this.isPair = function () {
    return ((cards.length === 2) && ((cards[0]).exactlyMatches(cards[1])));
  };
  this.isSoft = function () {
    return ((cards.length === 2) &&
      (cards[0].getRank() === 1 || cards[1].getRank() === 1));
  };
  this.isHard = function () {
    return (!(this.isPair() || this.isSoft()));
  };
  this.getType = function () {
    if (this.isPair())
      return "pairs";
    else if (this.isSoft())
      return "soft";
    else
      return "hard";
  };
  this.getStrategy = function (dealerCard) {
  //someday
  }
}
