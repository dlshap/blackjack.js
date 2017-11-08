function TableCtrl() {
    this.optionChanged = function(optionId) {
        var optionMap = {
            "drill-pairs": "pairs",
            "drill-hard": "hard",
            "drill-soft": "soft"
        };
        var optionClicked = document.getElementById(optionId).checked;
        dealer.changeDrill(optionMap[optionId], optionClicked);
    }

    this.deal = function () {
        tableUI.showMsg(1, "Dealing now...");
        gameController.deal();
    }

    this.hit = function() {
        gameController.hit();
    }

    this.stand = function() {
        gameController.stand();
    }

    this.double = function() {
        gameController.double();
    }

    this.split = function() {
        gameController.split();
    }

    this.hint = function() {
        gameController.hint();
    }
}
