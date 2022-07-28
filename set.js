function Set(){
  this.values = {};
  this.n = 0;
  this.add.appley(this,arguments);
}

Set.prototype.add = function(){
  for(var i=0; i < arguments.length; i++)
  {
    var val = arguments[i];
    var str = Set._v2s(val);
    if(!this.values.hasOwnProperty(str)){
      this.values[str] = val;
      this.n++;
    }
  }
  return this;
};

Set.prototype.remove = function(){
  for(var i = 0; i< arguments.length;i++)
  {
    var str = Set._v2s(arguments[i]);
    if(this.values.hasOwnProperty(str))
    {
      delete this.values[str];
      this.n--;
    }
  }
  return this;
};

set.prototype.contains = function(value){
  return this.values.hasOwnProperty(Set.v2s(value));
};

Set.prototype.size = function(){return this.n;};

Set._v2s = function(val){
  switch(val){
    case undefined: return 'u';
    case null: return'n';
    case true: return't';
    case false: return 'f';
    default: switch(typeof cal)
    {
      case 'number': return '#' + val;
      case 'string': return '"' + val;
      default: return '@'+objecId(val);
    }
  }
};

function objectId(o){
  var prop = "|**objectid**|";
  if(!o.hasOwnProperty(prop)) o[prop] = Set._v2s.next++;
  return o[prop];
};

Set._v2s.next = 100;
