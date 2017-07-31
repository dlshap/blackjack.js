var quiz = {
  hit: function() {
    tableUI.showMsg(1, "Hit Me!");
    testCard.runTests();
  },
  stand: function() {
    tableUI.showMsg(1, "No M&aacute;s!");
  },
  double: function() {
    tableUI.showMsg(1, "Double Down!");
  },
  split: function() {
    tableUI.showMsg(1, "Split 'Em!");
  }
};
