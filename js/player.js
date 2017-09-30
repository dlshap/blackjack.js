function Player() {
  var hands = [];
  var playerName = "";
  this.handCount = function () {
    return hands.length;
  };
  this.addHand = function (hand) {
    hands.push(hand);
  };
  this.getHand = function (whichHand) {
    if (hands.length === 0)
      return null;
    else
      return hands[whichHand];
  };
  this.clearHands = function () {
    hands = [];
  };
  this.setName = function (name) {
    this.playerName = name;
  };
  this.getName = function () {
    return this.playerName;
  }
}
