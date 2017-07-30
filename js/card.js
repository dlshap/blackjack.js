// Card Object (class)
function Card(num, suit) {
  var filename;
  var numbers =       ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
  var suits = ["Spades","Hearts","Diamonds","Clubs"];
  this.setFileName = function(value) {
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
  this.rank = function() {
    //facecards = 10
    if (this.value[0] < 10)
      return this.value[0];
    else {
      return 10;
    }
  }
  this.equals = function (card) {
    return (this.rank() === card.rank());
  }
  // Constructor
  this.value = [num, suit];
  this.setFileName(this.value);
};
