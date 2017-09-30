"use strict";

function TableUI() {
    this.addListeners = function () {
        this.addButtonListeners();
        this.addOptionListeners();
    }

    this.showMsg = function (msgNum, msg) {
        // display msg in message area: msg1 or msg2
        var msgId = "msg" + msgNum.toString();
        document.getElementById(msgId).innerHTML = msg;
    };

    this.showCard = function (whichCard, cardFileName) {
        document.getElementById(whichCard).src = cardFileName;
    };

    this.setDrillType = function (whichType, value) {
        var optionMap = {
            pairs: "drill-pairs",
            hard: "drill-hard",
            soft: "drill-soft"
        };
        document.getElementById(optionMap[whichType]).checked = value;
    };

    this.disable = function (theWidget) {
        switch (theWidget) {
            case "splitButton":
                document.getElementById("split-btn").disabled = true;
                break;
        }
    };

    this.enable = function (theWidget) {
        switch (theWidget) {
            case "splitButton":
                document.getElementById("split-btn").disabled = false;
                break;
        }
    }

    this.addButtonListeners = function() {
        //
        // direct button clicks to tablectrl functions
        //
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

    this.addOptionListeners = function() {
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
}



