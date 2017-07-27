var strategy = {
  hit: function() {
    tableUI.showMsg(1, "Hit Me!");
  },
  stand: function() {
    tableUI.showMsg(1, "Stick");
    tableUI.showMsg(2, "You better bust!");
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
