var gameController = {
  deal: function() {
    dealer.deal();
  },
  hit: function() {
    strategy.hit();
  },
  stand: function() {
    strategy.stand();
  },
  double: function() {
    strategy.double();
  },
  split: function() {
    strategy.split();
  }
};
