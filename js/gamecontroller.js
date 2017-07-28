var gameController = {
  deal: function() {
    dealer.deal();
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
