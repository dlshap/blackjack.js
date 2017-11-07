function Dealer() {
    var dealerHand = new Hand();
    var playerHand = new Hand();

    this.deal = function () {
        this.clearHands();
        this.dealDealerHand();
        this.dealPlayerHand();
        this.displayHands(dealerHand, playerHand);
    };

    this.displayHands = function (dealerHand, playerHand) {
        dealerHand.getCard(0).display("dealerCard");
        playerHand.getCard(0).display("playerCard1");
        playerHand.getCard(1).display("playerCard2");
    };

    this.getHand = function () {
        return this.dealerHand;
    };

    this.clearHands = function () {
        dealerHand.clearHand();
        playerHand.clearHand();
        player.clearHands();
    };

    this.dealDealerHand = function () {
        // for now, dealer only gets one card
        var card = this.dealFromShoe();
        dealerHand.addCard(card);
    };

    this.dealPlayerHand = function () {
        if (config.drillTypes.length() !== 1 && config.drillTypes.length() !== 2) {
            playerHand = this.dealNormal(this.playerHand);
            player.addHand(playerHand);
        }
        else {
            playerHand = drillDealer.dealCheatHand(playerHand);
            player.addHand(playerHand);
        }
    };

    this.dealFromShoe = function () {
        return shoe.getCard();
    };

    this.dealNormal = function (hand) {
        var card = this.dealFromShoe();
        hand.addCard(card);
        card = this.dealFromShoe();
        hand.addCard(card);
        return hand;
    };

    this.changeDrill = function (drillType, newValue) {
        config.drillTypes.change(drillType, newValue);
        shoe.loadShoe();
        shoe.shuffle();
    };
}
