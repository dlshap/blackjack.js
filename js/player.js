function Player() {
  var hands = [];
  this.addHand = function (hand) {
    hands.push(hand);
  }
  this.getHand = function (whichHand) {
    return hands[whichHand];
  }
  this.clearHands = function () {
    hands = [];
  }
}
