var testCard = {
  assert: function(val) {
    tableUI.showMsg(2, val);
  },
  test1: function() {
    var card1 = new Card(11,4);
    var card2 = new Card(11,3);
    this.assert(card1.equals(card2));
    // tableUI.showMsg (2, "true:"+card1.equals(card2));
  },
  test2: function() {
    var hand = new Hand();
    hand.addCard(new Card(1,1));
    hand.addCard(new Card(2,2));
    hand.addCard(new Card(3,3));
    this.assert(hand.isHoldingCard(new Card(2,3)));
  }
};
