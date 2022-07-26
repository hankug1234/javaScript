function addPrivateProperty(o,name,predicate){
  var value;
  o["get"+name] = function(){return value;};
  o["set"+name] = function(v){
    if(predicate&&!predicate(v)) throw Error("isn't predicated value");
    else value = v;
  };
}

var o = {};
addPrivateProperty(o,"Name",function(x){return typeof x === "string"});
/*
o.setName("hello");
console.log(o.getName());
*/

console.log(o.getName());
