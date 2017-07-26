var config = {
  cardFileURL: "http://www.dlsa.com/blackjack/",
  cardPath: "images/cardicons/",
  cardBackPath: "card-backs/b1fv_big.png",
  cardFaceDir: "SVG-cards-1.3/",
  cardFaceExt: ".svg",
  noOfDecks: 1,
  options: deckMix    // pairs, hard, soft
};

var deckMix = {
  options: [],
  deckMixContains: function(what) {
    for (var i = 0; i < this.options.length; i++) {
      if (this.options[i] === what)
        return i;
    }
    return -1;
  },
  addToDeckMix: function(what) {
    if (this.deckMixContains(what) === -1)
      this.options.push(what);
  }
  removeFromDeckMix: function(what) {
    var where = this.deckMixContains(what);
    if (where !=== -1)
      this.options.splice(where, 1);
  }
}

function changeDeckMix(option, value) {
  if (value) {
    config.deckMix.addToDeckMix(option);
    showMsg(2, "adding " + option)
  } else {
    config.deckMix.removeFromDeckMix(option);
    showMsg(2, "removing" + option);
  }
}
