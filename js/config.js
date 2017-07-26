var config = {
  cardFileURL: "http://www.dlsa.com/blackjack/",
  cardPath: "images/cardicons/",
  cardBackPath: "card-backs/b1fv_big.png",
  cardFaceDir: "SVG-cards-1.3/",
  cardFaceExt: ".svg",
  noOfDecks: 1,
  deckMix: [],    // pairs, hard, soft
  deckMixContains: function(what) {
    for (var i = 0; i < this.deckMix.length; i++) {
      if (this.deckMix[i] === what)
        return true;
    }
    return false;
  }
};
