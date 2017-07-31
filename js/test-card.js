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
  test4: function() {
    var card = new Card(1,3);
    var num = card.getRankName();
    this.assertTrue(num === "Ace");
    var card = new Card(13,2);
    var num = card.getRankName();
    this.assertTrue(num === "10");
  },
  test5: function() {
    // run against a pair
    var dealerCard = dealer.getHand().getCard(0);
    console.log(dealerCard.getCardName());
    var playerHand = player.getHand(0);
    console.log(playerHand.numOfCards);
    // console.log(playerCard.getCardName());
    // console.log(strategy.pairStrategy.getPairStrategy(dealerCard, playerCard));
  },

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
