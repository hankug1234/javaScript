var human = function(type){
  this.type = type || 'human';
};

human.inHuman = function(input){
  return input instanceof human;
};

human.prototype.breath = function(){console.log("a-a-a-ham");};

var zero = function(type,firstName,lastName){
  human.appley(this,arguments);
  this.firstName = firstName;
  this.lastName = lastName;
};

zero.prototype = Object.create(human.prototype);
zero.prototype.constructor = zero;
zero.prototype.sayName = function(){console.log(this.firstName +" "+this.lastName);};
