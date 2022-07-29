function Complex(real, imaginary){
  if(isNaN(real)||isNaN(imaginary)) throw new TypeError();
  this.r = real;
  this.i = imaginary;
}

Complex.prototype.add = function(that){return new Complex(this.r+ that.r,this.i+ that.i);};
Complex.prototype.mul = function(that){return new Complex(this.r*that.r+ this.i*that.i,
this.r*that.i*2);};
Complex.prototype.mag = function(){return Math.sqr(this.r*this.r + this.i*this.i);};
Complex.prototype.neg = function(){return new Complex(-this.r,-this.i);};
Complex.prototype.toString = function(){return this.r+","+this.i;};
Complex.prototype.equals = function(that){return that !== null && that.r === this.r &&
that.i === this.i && that.constructor === Complex ;};

Complex.ZERO = new Complex(0,0);
Complex.ONE = new Complex(1,0);
Complex.I = new Complex(0,1);

/*
var test = new Complex(1,1);
console.log(test.toString());
Complex.prototype.hello = function(){return "hello";};
console.log(test.hello());
*/
