var gameController = {
  deal: function() {
    dealer.deal(player);  //need to get the right player from somewhere
    strategy.pickBestMove(dealer.getHand(), player.getHand(0));
  },
  hit: function() {
    quiz.hit();
  },
  stand: function() {
    quiz.stand();
  },
  double: function() {
    quiz.double();
  },
  split: function() {
    quiz.split();
  },
  hint: function() {
    var playerHand = player.getHand(0);
    if (playerHand === null)
      cheatCard.showHint("hard");
    else
      cheatCard.showHint(playerHand.getType());
  }
};
