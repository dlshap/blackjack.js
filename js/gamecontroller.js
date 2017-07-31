var gameController = {
  deal: function() {
    dealer.deal(player);  //need to get the right player from somewhere
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
  }
};
