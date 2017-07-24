"use strict";
const USINGCODEPEN = false;
var cardFileURL;

if (USINGCODEPEN)
  cardFileURL = "http://www.dlsa.com/blackjack/";
else {
  cardFileURL = "";
}

var gameOptions = {
  handTypes: ["Pairs", "Hard Hands", "Soft Hands"]
};

//------------------------------------------------------------------------------
function testDeal() {
  var num = Math.floor(Math.random()*13)+1;
  var suit = Math.floor(Math.random()*4)+1;
  var card = new Card(num, suit);
  card.setValue(num, suit);
  showMsg(2, card.getFileName());
  showCard("dealerCard", card.getFileName());
}

document.addEventListener("DOMContentLoaded", function(event) {
  initTable()
});

function initTable() {
  showCard("dealerCard","b1fv_big.png");
  for (var i = 1; i <= 2; i++) {
    showCard("playerCard"+i,"b1fv_big.png");
  }
}

function showMsg(msgNum, msg) {
  // display msg in message area: msg1 or msg2
  var msgId = "msg"+msgNum.toString();
  document.getElementById(msgId).innerHTML = msg;
}

function showCard(whichCard, cardFileName) {
  cardFileName = cardFileURL+"images/cardicons/" + cardFileName;
  document.getElementById(whichCard).src = cardFileName;
}

function deal() {
  showMsg(1, "Dealing now...");
  testDeal();
}

function hit() {
  document.getElementById("msg1").innerHTML = "Hit me!";
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
