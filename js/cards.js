function Shoe(numDecks) {
  var shoeCards = [];
  this.loadShoe = function() {
    var i, j, k;
    for (i = 0; i < numDecks; i++) {
      for (j = 1; j <= 4; j++) {
        for (k = 1; k <= 13; k++) {
          var card = new Card(k, j);
          this.addCard(card);
        }
      }
    }
  }
  this.shuffle = function() {
    var x, i, j;
    for (i = shoeCards.length; i; i--) {
      j = Math.floor(Math.random() * i);
      x = shoeCards[i - 1];
      shoeCards[i - 1] = shoeCards[j];
      shoeCards[j] = x;
    }
  }
  this.length = function() {
    return shoeCards.length;
  }
  this.addCard = function(card) {
    shoeCards.push(card);
  }
  this.getCard = function() {
    if (shoeCards.length === 0)
      this.loadShoe();
    return shoeCards.pop();
  }
  // Constructor
  this.loadShoe();
}

// Card Object (class)
function Card(num, suit) {
  this.setFileName = function(value) {
    var numbers = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
    var suits = ["Spades","Hearts","Diamonds","Clubs"];
    this.fileName = config.cardPath;
    if (num === 0 && suit === 0)
        this.fileName += config.cardBackPath;
    else {
      this.fileName += config.cardFaceDir;
      this.fileName += numbers[value[0]-1].toLowerCase() +
        "_of_" +
        suits[value[1]-1].toLowerCase() +
        config.cardFaceExt;
    }
  }
  this.display = function(where) {
      tableUI.showCard(where, this.getFileName());
  }
  this.getFileName = function() {
    return this.fileName;
  }
  this.setValue = function(num,suit) {
    this.value = [num, suit];
  }
  this.getValue = function() {
    return this.value;
  }
  // Constructor
  this.value = [num, suit];
  this.setFileName(this.value);
};
