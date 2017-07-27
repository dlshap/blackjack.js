var tableUI = new TableUI();

function TableUI() {
  this.showMsg = function(msgNum, msg) {
    // display msg in message area: msg1 or msg2
    var msgId = "msg"+msgNum.toString();
    document.getElementById(msgId).innerHTML = msg;
  }

  this.showCard = function(whichCard, cardFileName) {
    document.getElementById(whichCard).src = cardFileName;
  }

  this.setDrillType = function (whichType, value) {
    document.getElementById(whichType).checked = value;
  }
}
