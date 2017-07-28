var testCard = {
  test1: function() {
    var card1 = new Card(11,4);
    var card2 = new Card(11,3);
    tableUI.showMsg (2, "true:"+card1.equals(card2));
  }
};
