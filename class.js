function extend(o,p)
{
  for(prop in p)
  {
    o[prop] = p[prop];
  }

  return o;
}

function defineClass(constructor, methods,statics)
{
  if(methods) extend(constructor.prototype, methods);
  if(statics) extend(constructor,statics);
  return constructor;
}

function inherit (p){
  if(p == null) throw TypeError();
  if(Object.create) return Object.create(p);
  var t = typeof p;
  if(t !== Object && t !== "function") throw TypeError();
  function f() {};
  f.prototype = p;
  return new f();
};

function defineSubclass(superclass,constructor,methods,statics)
{
  constructor.prototype = inherit(superclass.prototype);
  constructor.prototype.constructor = constructor;
  if(methods) extend(constructor.prototype,methods);
  if(statics) extend(constructor,statics);
  return constructor;
};

Function.prototype.extend = function(constructor,methods,statics){
return defineSubclass(this,constructor,methods,statics);};
/*abstract class*/
function abstractmethod(){
  throw new Error("abstract method call!");
}

function AbstractSet(){
  throw new Error("abastract concstructor call!")
}

AbstractSet.prototype.contains = abstractmethod;

var NotSet = AbstractSet.extend(function NotSet(set){this.set = set;},
{
  contains: function(x){return this.set.contains(x);},
  toString: function(x){return "~"+this.set.toString();},
  equals: function(that){return that instanceof NotSet && this.set.equals(that.set);}
});
