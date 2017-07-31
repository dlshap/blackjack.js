var testCard = {
  // Make tests self-running
  testName: "",
  assertTrue: function(val) {
    if (!val)
      console.log(this.testName + "(expect true):" + val);
  },
  test1: function() {
    var card1 = new Card(7,4);
    var card2 = new Card(7,3);
    this.assertTrue(card1.equals(card2));
    // tableUI.showMsg (2, "true:"+card1.equals(card2));
  },
  test2: function() {
    var hand = new Hand();
    hand.addCard(new Card(1,1));
    hand.addCard(new Card(2,2));
    hand.addCard(new Card(3,3));
    this.assertTrue(hand.isHoldingCard(new Card(2,3)));
  },
  test3: function() {
    // testMatch
    var hand = new Hand();
    hand.addCard(new Card(1,1));
    hand.addCard(new Card(1,4));
    this.assertTrue(hand.isPair());
    hand = new Hand();
    hand.addCard(new Card(10,1));
    hand.addCard(new Card(11,1));
    this.assertTrue(!hand.isPair());
  },
  // test4: function() {
  //   console.log(dealer.dealerHand.getCard(0));
  //   console.log(player.getHand(0).getCard(0),
  //       player.getHand(0).getCard(1));
  // },

  runTests: function() {
    console.log("testing...");
    var reTestName = /test[\d+].*/
    var testProps = Object.getOwnPropertyNames(testCard);
    for (var i in testProps) {
      this.testName = testProps[i];
      if (reTestName.exec(this.testName))
        this[this.testName]();
    }
    console.log("tests done");
  }
};
