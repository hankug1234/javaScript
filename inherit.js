function inherit(p){
  if(p == null) throw TypeError();
  if(Object.create) return Object.create(p);
  var t = typeof p;
  if(t !== Object && t !== "function") throw TypeError();
  function f() {};
  f.prototype = p;
  return new f();

}

var o = {};
o.x = 1;
var a = inherit(o);
a.y=2;
var b = inherit(a);
b.z = 3;
b.x = 3;
console.log(
o.x,
a.y,
b.z,
b.x
);
