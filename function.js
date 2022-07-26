/*
function은 javascript 내에서 객체 로 취급 되면 property또한 할당 할 수 있다
function이 객체 내의 property로써 사용 되면 method라고 한다

*/

function max(/*arguments*/){// arguments 객체느 배열이 아니라 유사 배열 이다
  var max = Number.NEGATIVE_INFINITY;
  for(var i = 0; i< arguments.length;i++)
  {
    if(arguments[i] > max ) max = arguments[i];
  }
  return max;
}

function flexiSum(a){
  var total = 0;
  for(var i; i< arguments.length;i++)
  {
    var element = arguments[i], n;
    if(element == null) continue;
    if(isArray(element)) flexiSum.apply(this,element);
    if(typeof element == "function") n = Number(element());
    else n = Number(element);
    if(isNan(element)) throw Error("element is nan");
    total += n;
  }
  return total;
}

//console.log(max(1,2,3,4,5,6,7,8,9,10,2,3,4,5,11,43,5,5,5,));
var a = {x:100};
var b = Object.create(a);
b.x = 101;
b.y = 102;
b.z = 103;
for(n in b) console.log(n+"\n")
console.log(b.prototype.x);
