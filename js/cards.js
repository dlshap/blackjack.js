function Card(num,suit) {
  this.setFileName = function(value) {
    var numbers = ["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King"];
    var suits = ["Spades","Hearts","Diamonds","Clubs"];
    this.fileName = numbers[value[0]-1].toLowerCase()+"_"+suits[value[1]-1].toLowerCase()+"_big.png";
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
