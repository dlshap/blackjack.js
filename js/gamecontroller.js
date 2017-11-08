function GameController() {
    var quiz = new Quiz();

    this.deal = function() {
        dealer.deal();  //need to get the right player from somewhere
        if (player.getHand(0).getType() !== "pairs") {
            tableUI.disable("splitButton");
        } else {
            tableUI.enable("splitButton");
        }
        strategy.pickBestMove(dealer.getHand(), player.getHand(0));
    }

    this.hit = function() {
        quiz.hit();
    }

    this.stand = function() {
        quiz.stand();
    }

    this.double = function() {
        quiz.double();
    }

    this.split = function() {
        quiz.split();
    }

    this.hint = function() {
        var cheatCard = new CheatCard();
        var playerHand = player.getHand(0);
        if (playerHand === null)
            cheatCard.showHint("hard");   //default: hard card
        else
            cheatCard.showHint(playerHand.getType());
    }
}