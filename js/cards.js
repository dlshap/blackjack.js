const USINGCODEPEN = false;
var cardFileURL;

if (USINGCODEPEN)
  cardFileURL = "http://www.dlsa.com/blackjack/";
else {
  cardFileURL = "";
}
/*------------------------------------------------------------------------------------*/
function getCardPath() {
  // eventually make this a resource (?)
  return cardFileURL + "images/cardicons/";
}

function showCard(whichCard, card) {
  document.getElementById(whichCard).src = card.getFileName();
}

// Card Object (class)
function Card(num, suit) {
  this.setFileName = function(value) {
    var numbers = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
    var suits = ["Spades","Hearts","Diamonds","Clubs"];
    this.fileName = getCardPath();
    if (num === 0 && suit === 0)
        this.fileName += "card-backs/b1fv_big.png";
    else {
      this.fileName += "SVG-cards-1.3/";
      this.fileName += numbers[value[0]-1].toLowerCase()+"_of_"+suits[value[1]-1].toLowerCase()+".svg";
    }
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
