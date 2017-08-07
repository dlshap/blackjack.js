var quiz = {
  hit: function() {
    testCard.runTests();
    if (strategy.isBestMove("H"))
      tableUI.showMsg(1, "Hit: Good choice!");
    else
      tableUI.showMsg(1, "Hit: Try again!");
  },
  stand: function() {
    if (strategy.isBestMove("S"))
      tableUI.showMsg(1, "Stand: Good choice!");
    else
      tableUI.showMsg(1, "Stand: Try again!");
  },
  double: function() {
    if (strategy.isBestMove("D"))
      tableUI.showMsg(1, "Double: Good choice!");
    else
      tableUI.showMsg(1, "Double: Try again!");
  },
  split: function() {
    if (strategy.isBestMove("P"))
      tableUI.showMsg(1, "Split: Good choice!");
    else
      tableUI.showMsg(1, "Split: Try again!");
  },
  hint: function() {
    tableUI.showMsg(1,"Hints are coming soon!");
  }
};
