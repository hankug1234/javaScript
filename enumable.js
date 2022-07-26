function extend(o,p) // 두 열거 가능 객체를 합친
{
  for(prop in p)
  {
   o[prop] = p[prop];
 }
  return o;
}

//합쳐지는 객체에 동일한 성분이 있다면 놔두고 합친다
function merge(o,p){
  for(prop in p)
  {
    if(o.hasOwnProperty("prop")) continue;
    o[prop] == p[prop];
  }
  return o;
}

//o의 성분이 p에 없다면 o에서 제거 한다
function restrict(o,p){
  for(prop in o)
  {
    if(!(prop in p)) delete o[prop];

  }
  return o;
}
//o 에서 p성분을 지운다
function subtract(o,p){
  for(propo in p) delete o[prop];

  return o;
}

// o p 의 합집합을 반환한다
function union(o,p){
    return extend(extend({},o),p);
}

//o p 의 교집합 반환
function intersect(o,p){
  return restrict(extend({},p),o);
}

function keys(o){
  if(typeof o !== "object") throw TypeError();
  var result =[];
  for(key in o)
  {
    if(o.hasOwnProperty(key)) result.push(key)
  }
  return result;
}
//모든 객체의 최상의 prototype인 Object에 extend 메서드를 추가 한다
Object.defineProperty(Object.prototype,
"extend",{
  writable : true,
  enumerable : false,
  configurable : true,
  value : function(o) {
    var names = Object.getOwnPropertyNames(o);
    for(var i =0; i< names.length;i++)
    {
      if(names[i] in this) continue;
      var desc = Object.getOwnPropertyDescriptor(o,names[i]);
      Object.defineProperty(this,names[i],desc);
    }
  }
})

var test = [];
var target = {x:1,y:2,z:3};
test.extend(target);
for(x in test)
{
  console.log(x+":"+test[x]+" : "+Object.getOwnPropertyDescriptor(target,x)+"\n");
}
