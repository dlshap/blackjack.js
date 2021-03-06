function Shoe(numDecks) {
  var shoeCards = [];
  this.loadShoe = function() {
    var i, j, k, lowerCard;
    for (i = 0; i < numDecks; i++) {
      for (j = 1; j <= 4; j++) {
        for (k = 1; k <= 13; k++) {
          var card = new Card(k, j);
          this.addCard(card);
        }
      }
    }
  };
  this.shuffle = function() {
    var x, i, j, k;
    for (k = 0; k < config.numOfShuffles; k++) {
      for (i = shoeCards.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = shoeCards[i - 1];
        shoeCards[i - 1] = shoeCards[j];
        shoeCards[j] = x;
      }
    }
  };
  this.length = function() {
    return shoeCards.length;
  };
  this.addCard = function(card) {
    shoeCards.push(card);
  };
  this.getCard = function() {
    if (shoeCards.length === 0) {
      this.loadShoe();
      this.shuffle();
    }
    return shoeCards.pop();
  };
  // Constructor
  this.loadShoe();
}
