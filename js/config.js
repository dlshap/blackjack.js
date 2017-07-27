var config = {
  cardFileURL: "http://www.dlsa.com/blackjack/",
  cardPath: "images/cardicons/",
  cardBackPath: "card-backs/b1fv_big.png",
  cardFaceDir: "SVG-cards-1.3/",
  cardFaceExt: ".svg",
  noOfDecks: 1,
  drillTypes: new DrillTypes([])   //initially pairs only
};

function DrillTypes(initDrillTypes) {
  var options = initDrillTypes;  // pairs, hard, soft
  this.findDrillType = function(what) {
    for (var i = 0; i < options.length; i++) {
      if (options[i] === what)
        return i;
    }
    return -1;
  }
  this.addDrillType = function(what) {
    if (this.findDrillType(what) === -1)
      options.push(what);
  }
  this.removeDrillType = function(what) {
    var where = this.findDrillType(what);
    if (where !== -1)
      options.splice(where, 1);
  }
  this.length = function() {
    return options.length;
  }
  this.change = function(option, value) {
    if (value) {
      this.addDrillType(option);
      tableUI.showMsg(2, "adding " + option)
    } else {
      this.removeDrillType(option);
      tableUI.showMsg(2, "removing " + option);
    }
  }
}
