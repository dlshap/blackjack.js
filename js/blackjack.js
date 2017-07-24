const online = false;
if (online)
  cardFileURL = "http://www.dlsa.com/blackjack/";
else {
  cardFileURL = "";
}

function testDeal() {
  var num = Math.floor(Math.random()*13)+1;
  var suit = Math.floor(Math.random()*4)+1;
  card = new Card(num, suit);
  card.setValue(num, suit);
  showMsg(2, card.getFileName());
  showCard(card.getFileName());
}

function showMsg(msgNum, msg) {
  // display msg in message area: msg1 or msg2
  var msgId = "msg"+msgNum.toString();
  document.getElementById(msgId).innerHTML = msg;
}

function showCard(cardFileName) {
  cardFileName = cardFileURL+"cardicons/" + cardFileName;
  document.getElementById("dealerCard").src = cardFileName;
}

var Card = function(num, suit) {

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



function deal() {
  showMsg(1, "Dealing now...");
  testDeal();
}

function hit() {
  document.getElementById("msg1").innerHTML = "Hit me!";
  var card = new Card(1, "Hearts");
  document.getElementById("msg2").innerHTML = card.getValue()[1];
}

function stand() {
  document.getElementById("msg1").innerHTML = "Stand down";
  document.getElementById("msg2").innerHTML = "You better bust!"
}

function double() {
  document.getElementById("msg1").innerHTML = "Double Down";
}

function split() {
  document.getElementById("msg1").innerHTML = "Split 'em!";
}
