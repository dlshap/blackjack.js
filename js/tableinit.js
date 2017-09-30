"use strict";

function initTable() {
    showCardBacks();
    addButtonListeners();
    addOptionListeners();
    setInitialDrillTypes();
    preLoadCardImages();
}

function showCardBacks() {
    //do this first so no delay on screen
    var card = new Card(0, 0);
    card.display("dealerCard");
    for (var i = 1; i <= 2; i++) {
        card.display("playerCard" + i);
    }
}

function setInitialDrillTypes() {
    if (config.drillTypes.findDrillType("pairs") !== -1)
        tableUI.setDrillType("pairs", true);
    if (config.drillTypes.findDrillType("hard") !== -1)
        tableUI.setDrillType("hard", true);
    if (config.drillTypes.findDrillType("soft") !== -1)
        tableUI.setDrillType("soft", true);
}

function preLoadCardImages() {
    var i, j, card;
    var image = new Image();
    for (i = 1; i <= 13; i++) {
        for (j = 1; j <= 4; j++) {
            card = new Card(i, j);
            image.src = card.getFileName();
        }
    }
}

function addButtonListeners() {
    document.getElementById("deal-btn").addEventListener("click",
        function () {
            deal();
        });
    document.getElementById("hit-btn").addEventListener("click",
        function () {
            hit();
        });
    document.getElementById("stand-btn").addEventListener("click",
        function () {
            stand();
        });
    document.getElementById("double-btn").addEventListener("click",
        function () {
            double();
        });
    document.getElementById("split-btn").addEventListener("click",
        function () {
            split();
        });
    document.getElementById("hint-btn").addEventListener("click",
        function () {
            hint();
        });
}

function addOptionListeners() {
    document.getElementById("drill-pairs").addEventListener("click",
        function () {
            optionChanged("drill-pairs");
        });
    document.getElementById("drill-hard").addEventListener("click",
        function () {
            optionChanged("drill-hard");
        });
    document.getElementById("drill-soft").addEventListener("click",
        function () {
            optionChanged("drill-soft");
        });
}



