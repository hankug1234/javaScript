/*
property attribute
writable 해당 property를 고쳐 쓸수 있는가?
enumerable 해당 property가 열거 가능 한가?
configurable configurable, enumerable, writable property가 변경 가능 한가?

ECMA5script 에서 property attribute를 표현 하기 위해 property descriptor 라는 객체를
사용한다
property dedscriptor는 get set enuumerable configurable property를 가지며
get set은 함수 나머지는 boolean 값을 갖는다
*/


var round = {
  x:1.0,
  y:1.0,
  get r(){Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))} ,
  set r(newValue){
    var oldValue = this.r();
    var ratio = newValue/oldValue;
    this.x = this.x*ratio;
    this.y = this.y*ratio;
  }
};

var serialnum = {
  $n: 0,
  get next(){return this.$n++;},
  set next(n){
    if(n>this.$n) this.$n = n;
    else
     throw "serial number can only be set to a larger value";}
};


Object.getOwnPropertyDescriptor() // 인수로 주어진 객체의 property descriptor 객체를 반환 한다
