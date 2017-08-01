var strategy = {
  bestMove: "",
  isBestMove: function (choice) {
    return (choice === this.bestMove);
  },
  pairStrategy: {
    strategyTable: {
    Ace: {2:"P", 3:"P", 4:"P", 5:"P", 6:"P", 7:"P", 8:"P", 9:"P", 10:"P", Ace:"P"},
     10: {2:"S", 3:"S", 4:"S", 5:"S", 6:"S", 7:"S", 8:"S", 9:"S", 10:"S", Ace:"S"},
      9: {2:"P", 3:"P", 4:"P", 5:"P", 6:"P", 7:"S", 8:"P", 9:"P", 10:"S", Ace:"S"},
      8: {2:"P", 3:"P", 4:"P", 5:"P", 6:"P", 7:"P", 8:"P", 9:"P", 10:"P", Ace:"P"},
      7: {2:"P", 3:"P", 4:"P", 5:"P", 6:"P", 7:"P", 8:"H", 9:"H", 10:"H", Ace:"H"},
      6: {2:"H", 3:"P", 4:"P", 5:"P", 6:"P", 7:"H", 8:"H", 9:"H", 10:"H", Ace:"H"},
      5: {2:"D", 3:"D", 4:"D", 5:"D", 6:"D", 7:"D", 8:"D", 9:"D", 10:"H", Ace:"H"},
      4: {2:"H", 3:"H", 4:"H", 5:"H", 6:"H", 7:"H", 8:"H", 9:"H", 10:"H", Ace:"H"},
      3: {2:"H", 3:"H", 4:"P", 5:"P", 6:"P", 7:"P", 8:"H", 9:"H", 10:"H", Ace:"H"},
      2: {2:"H", 3:"H", 4:"P", 5:"P", 6:"P", 7:"P", 8:"H", 9:"H", 10:"H", Ace:"H"}
        },
      getStrategy: function(dealerHand, playerHand) {
        var dealerCardRank = dealerHand.getCard(0).getRankName();
        var playerCardRank = playerHand.getCard(0).getRankName();
        var playerCardStrategy = this.strategyTable[playerCardRank];
        var bestMove = playerCardStrategy[dealerCardRank];
        return bestMove;
      }
    },
  softStrategy: {
    strategyTable: {
     21: {2:"S", 3:"S", 4:"S", 5:"S", 6:"S", 7:"S", 8:"S", 9:"S", 10:"S", Ace:"S"},
     20: {2:"S", 3:"S", 4:"S", 5:"S", 6:"S", 7:"S", 8:"S", 9:"S", 10:"S", Ace:"S"},
     19: {2:"S", 3:"S", 4:"S", 5:"S", 6:"S", 7:"S", 8:"S", 9:"S", 10:"S", Ace:"S"},
     18: {2:"S", 3:"D", 4:"D", 5:"D", 6:"D", 7:"S", 8:"S", 9:"H", 10:"H", Ace:"H"},
     17: {2:"H", 3:"D", 4:"D", 5:"D", 6:"D", 7:"H", 8:"H", 9:"H", 10:"H", Ace:"H"},
     16: {2:"H", 3:"H", 4:"D", 5:"D", 6:"D", 7:"H", 8:"H", 9:"H", 10:"H", Ace:"H"},
     15: {2:"H", 3:"H", 4:"D", 5:"D", 6:"D", 7:"H", 8:"H", 9:"H", 10:"H", Ace:"H"},
     14: {2:"H", 3:"H", 4:"H", 5:"D", 6:"D", 7:"H", 8:"H", 9:"H", 10:"H", Ace:"H"},
     13: {2:"H", 3:"H", 4:"H", 5:"D", 6:"D", 7:"H", 8:"H", 9:"H", 10:"H", Ace:"H"}
    },
    getStrategy: function(dealerHand, playerHand) {
      var dealerCardRank = dealerHand.getCard(0).getRankName();
      var playerCardTotal = playerHand.handHighTotal();
      var playerCardStrategy = this.strategyTable[playerCardTotal];
      var bestMove = playerCardStrategy[dealerCardRank];
      return bestMove;
    }
  },
  hardStrategy: {
    strategyTable: {
     17: {2:"S", 3:"S", 4:"S", 5:"S", 6:"S", 7:"S", 8:"S", 9:"S", 10:"S", Ace:"S"},
     16: {2:"S", 3:"S", 4:"S", 5:"S", 6:"S", 7:"H", 8:"H", 9:"H", 10:"H", Ace:"H"},
     15: {2:"S", 3:"S", 4:"S", 5:"S", 6:"S", 7:"H", 8:"H", 9:"H", 10:"H", Ace:"H"},
     14: {2:"S", 3:"S", 4:"S", 5:"S", 6:"S", 7:"H", 8:"H", 9:"H", 10:"H", Ace:"H"},
     13: {2:"S", 3:"S", 4:"S", 5:"S", 6:"S", 7:"H", 8:"H", 9:"H", 10:"H", Ace:"H"},
     12: {2:"H", 3:"H", 4:"S", 5:"S", 6:"S", 7:"H", 8:"H", 9:"H", 10:"H", Ace:"H"},
     11: {2:"D", 3:"D", 4:"D", 5:"D", 6:"D", 7:"D", 8:"D", 9:"D", 10:"D", Ace:"H"},
     10: {2:"D", 3:"D", 4:"D", 5:"D", 6:"D", 7:"D", 8:"D", 9:"D", 10:"H", Ace:"H"},
      9: {2:"H", 3:"D", 4:"D", 5:"D", 6:"D", 7:"H", 8:"H", 9:"H", 10:"H", Ace:"H"},
      8: {2:"H", 3:"H", 4:"H", 5:"H", 6:"H", 7:"H", 8:"H", 9:"H", 10:"H", Ace:"H"}
    },
    getStrategy: function(dealerHand, playerHand) {
      var dealerCardRank = dealerHand.getCard(0).getRankName();
      var playerCardTotal = playerHand.handHighTotal();
      if (playerCardTotal <= 8) {
        bestMove = "H";
      } else if (playerCardTotal >= 17) {
        bestMove = "S";
      }
      else {
        var playerCardStrategy = this.strategyTable[playerCardTotal];
        var bestMove = playerCardStrategy[dealerCardRank];
      }
      return bestMove;
    }
  },
  pickBestMove: function (dealerHand, playerHand) {
    if (playerHand.isPair()) {
      this.bestMove = this.pairStrategy.getStrategy(dealerHand, playerHand);
    }
    else if (playerHand.isSoft()) {
      this.bestMove = this.softStrategy.getStrategy(dealerHand, playerHand);
    }
    else {
      this.bestMove = this.hardStrategy.getStrategy(dealerHand, playerHand);
    }
  }
};
