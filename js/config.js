var config = {
  cardFileURL: "http://www.dlsa.com/blackjack/",
  cardPath: "images/cardicons/",
  cardBackPath: "card-backs/b1fv_big.png",
  cardFaceDir: "SVG-cards-1.3/",
  cardFaceExt: ".svg",
  noOfDecks: 1,
  options: new Options()    // pairs, hard, soft
};

function Options() {
  var options = [];
  this.findOption = function(what) {
    for (var i = 0; i < options.length; i++) {
      if (options[i] === what)
        return i;
    }
    return -1;
  }
  this.addOption = function(what) {
    if (this.findOption(what) === -1)
      options.push(what);
  }
  this.removeOption = function(what) {
    var where = this.findOption(what);
    if (where !== -1)
      options.splice(where, 1);
  }
  this.length = function() {
    return options.length;
  }
}

function changeOptions(option, value) {
  if (value) {
    config.options.addOption(option);
    showMsg(2, "adding " + option)
  } else {
    config.options.removeOption(option);
    showMsg(2, "removing " + option);
  }
}
