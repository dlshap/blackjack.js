var quiz = {
  hit: function() {
    tableUI.showMsg(1, "Hit Me!");
    testCard.test1();
  },
  stand: function() {
    tableUI.showMsg(1, "Stick");
    testCard.test2();
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
