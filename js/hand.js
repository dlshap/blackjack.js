function Hand() {
  var cards = [];
  this.addCard = function (card) {
    cards.push(card);
  }
  this.getCard = function () {
    cards.pop(card);
  }
  this.isHoldingCard = function (card) {
    for (var i = 0; i < cards.length; i++) {
      if (cards[i].equals(card)) return true;
    }
    return false;
  }
};
