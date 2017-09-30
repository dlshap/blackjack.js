var config = {
  cardFileURL: "http://www.dlsa.com/blackjack/",
  cardPath: "images/cardicons/",
  cardBackPath: "card-backs/b1fv_big.png",
  cardFaceDir: "SVG-cards-1.3/",
  cardFaceExt: ".svg",
  numOfDecks: 2,
  numOfShuffles: 8,
  drillTypes: new DrillTypes()   //initially pairs only
};

function DrillTypes(initDrillTypes) {
  var options = storageMgr.retrieveObj("drillTypes");
  var notNull = false;
  if (options === null)
    options = [];
  for (var i = 0; i < options.length; i++) {
    if (options[i] !== null)
      notNull = true;
  }
  if (!notNull)
    options = [];
  this.findDrillType = function(what) {
    for (var i = 0; i < options.length; i++) {
      if (options[i] === what)
        return i;
    }
    return -1;
  };
  //parameter index from 1; convert to array index from 0
  this.length = function() {
    return options.length;
  };
  this.getDrillType = function(index) {
    if (index > options.length)
      return -1;
    else
      return options[index -1];
  };
  this.addDrillType = function(what) {
    if (this.findDrillType(what) === -1)
      options.push(what);
    this.saveMe();
  };
  this.removeDrillType = function(what) {
    var where = this.findDrillType(what);
    if (where !== -1)
      options.splice(where, 1);
    this.saveMe();
  };
  this.change = function(option, value) {
    if (value) {
      this.addDrillType(option);
    } else {
      this.removeDrillType(option);
    }
    this.saveMe();
  };
  this.saveMe = function() {
    storageMgr.saveObj("drillTypes", options);
  }
}
