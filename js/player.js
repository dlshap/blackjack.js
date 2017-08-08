function Player() {
  var hands = [];
  var playerName = "";
  this.handCount = function () {
    return this.hands.length;
  }
  this.addHand = function (hand) {
    this.hands.push(hand);
  }
  this.getHand = function (whichHand) {
    if (this.hands.length === 0)
      return null
    else
      return this.hands[whichHand];
  }
  this.clearHands = function () {
    this.hands = [];
  }
  this.setName = function (name) {
    this.playerName = name;
  }
  this.getName = function () {
    return this.playerName;
  }
}
