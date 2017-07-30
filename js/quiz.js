var quiz = {
  hit: function() {
    tableUI.showMsg(1, "Hit Me!");
    tableUI.showMsg(2, "testing...");
    testCard.runTests();
  },
  stand: function() {
    tableUI.showMsg(1, "Stick");
  },
  double: function() {
    tableUI.showMsg(1, "Double Down!");
    tableUI.showMsg(2, "It's pay day!");
  },
  split: function() {
    tableUI.showMsg(1, "Split 'Em");
    tableUI.showMsg(2, "I can't look");
  }
};
