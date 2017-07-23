
var Card = function(num, suit) {
  this.value = [num, suit];
  this.name = suit;
  console.log(this.value[0]);

  this.getName = function() {
    return this.name;
  }

  this.setValue = function(num,suit) {
    this.value = [num, suit];
  }

  this.getValue = function() {
    return this.value;
  }
};

function deal() {
 document.getElementById("msg1").innerHTML = "Dealing";  document.getElementById("msg2").innerHTML = "...";
}

function hit() {
  document.getElementById("msg1").innerHTML = "Hit me!";
  var card = new Card(1, "Hearts");
  document.getElementById("msg2").innerHTML = card.getValue()[1];
}

function stand() {
  document.getElementById("msg1").innerHTML = "Stand down";
  document.getElementById("msg2").innerHTML = "You better bust!"
}

function double() {
  document.getElementById("msg1").innerHTML = "Double Down";
}

function split() {
  document.getElementById("msg1").innerHTML = "Split 'em!";
}
