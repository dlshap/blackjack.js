function Hand() {
  var cards = [];
  this.addCard = function (card) {
    cards.push(card);
  }
  this.getCard = function (i) {
    return cards[i];
  }
  this.nextCard = function () {
    return cards.pop();
  }
  this.isHoldingCard = function (card) {
    for (var i = 0; i < cards.length; i++) {
      if (cards[i].exactlyMatches(card)) return true;
    }
    return false;
  }
  this.clearHand = function () {
    cards = [];
  }
  this.isPair = function () {
    return ((cards.length === 2) && ((cards[0]).exactlyMatches(cards[1])));
  }
  this.isHard = function () {

  }
  this.isSoft = function () {

  }
  this.getStrategy = function () {

  }
};
