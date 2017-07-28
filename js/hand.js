function hand() {
  var cards = [];
  this.addCard = function (card) {
    cards.push(card);
  }
  this.getCard = function () {
    cards.pop(card);
  }
  this.isHoldingCard = function (card) {
    for (c in cards) {
      if (c.equals(card)) return true;
    }
    return false;
  }
};
