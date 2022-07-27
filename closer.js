function addPrivateProperty(o,name,predicate){
  var value;
  o["get"+name] = function(){return value;};
  o["set"+name] = function(v){
    if(predicate&&!predicate(v)) throw Error("isn't predicated value");
    else value = v;
  };
}

function trace(o,name){// monkey packing
  var original = o[name];
  o[name] = function(){
    /*new code*/
    var result = original.apply(o,arguments);
    /*new code*/
    return result;
  };
}
var cache ={};
function memorize(f){
  //var cache = {};
  return function(){
    var key = arguments.length + Array.prototype.join.call(arguments,",");
    if(key in cache) return cache[key];
    else return cache[key] = f.apply(this, arguments);
  };
}

var o = {};
addPrivateProperty(o,"Name",function(x){return typeof x === "string"});
o.setName("hello");
console.log(o.getName()+"\n");

var f = Function("x","y","{console.log(Array.prototype.join.call(arguments,\",\"));}");
console.log(f(1,2));

var factorial = memorize(function(n){return (n<=1)?1:n*factorial(n-1)});
factorial(5);
console.log(cache);

var a = {x:100,y:200};
var b =Object.create(a);
var c = Object.create(a);
c.z  = 111;
b.z = 100;

a.x = 55;

console.log(b.x," ",c.x);
