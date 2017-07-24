const online = false;
if (online)
  cardFileURL = "http://www.dlsa.com/blackjack/";
else {
  cardFileURL = "";
}

var num = 1;
var suit = 1;

function testDeal() {
  var num = Math.floor(Math.random()*13)+1;
  var suit = Math.floor(Math.random()*4)+1;
  showMsg(2, card.getFileName());
  showCard(card.getFileName());
}

function showMsg(msgNum, msg) {
  // display msg in message area: msg1 or msg2
  var msgId = "msg"+msgNum.toString();
  document.getElementById(msgId).innerHTML = msg;
}

function showCard(cardFileName) {
  console.log(cardFileName);
  cardFileName = cardFileURL+"cardicons/" + cardFileName;
  document.getElementById("dealerCard").src = cardFileName;
}

var Card = function(num, suit) {
  var numbers = ["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King"];
  var suits = ["Spades","Hearts","Diamonds","Clubs"];
  this.value = [num, suit];
  this.fileName = numbers[num-1].toLowerCase()+"_"+suits[suit-1].toLowerCase()+"_big.png";

  this.getFileName = function() {
    return this.fileName;
  }

  this.setValue = function(num,suit) {
    this.value = [num, suit];
  }

  this.getValue = function() {
    return this.value;
  }
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
