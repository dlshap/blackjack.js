var strategy = {
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
      getPairStrategy: function(dealerCard, playerCard) {
        var dealerCardRank = dealerCard.getRankName();
        var againstDealerCard = this.strategyTable[dealerCardRank];
        var playerCardRank = playerCard.getRankName();
        return againstDealerCard[playerCardRank];
      }
    },
  hardStrategy: {

  },
  softStrategy: {

  }
};
