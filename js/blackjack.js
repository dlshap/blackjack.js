"use strict";

var gameOptions = {
  handTypes: ["Pairs", "Hard Hands", "Soft Hands"]
};

//------------------------------------------------------------------------------
function testDeal() {
  var num = Math.floor(Math.random()*13)+1;
  var suit = Math.floor(Math.random()*4)+1;
  var card = new Card(num, suit);
  showMsg(2, card.getFileName());
  showCard("dealerCard", card);
}

document.addEventListener("DOMContentLoaded", function(event) {
  initTable()
});

function initTable() {
  var card = new Card(0,0);
  showCard("dealerCard", card);
  for (var i = 1; i <= 2; i++) {
    showCard("playerCard"+i,card);
  }
}

function showMsg(msgNum, msg) {
  // display msg in message area: msg1 or msg2
  var msgId = "msg"+msgNum.toString();
  document.getElementById(msgId).innerHTML = msg;
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
