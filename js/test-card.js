var testCard = {
  // Make tests self-running
  testName: "",
  assertTrue: function(val) {
    if (!val)
      console.log(this.testName + "(expect true):" + val);
  },
  test1: function() {
    var card1 = new Card(7,4);
    var card2 = new Card(11,3);
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
  // test3: function() {
  //   // testMatch
  // }

  runTests: function() {
    this.testName = "test1";
    this.test1();
    this.testName = "test2";
    this.test2();
    // testName = "test3";
    // test3();
  }
};
