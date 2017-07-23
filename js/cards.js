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
