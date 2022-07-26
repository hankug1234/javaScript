/* array는 특별한 형식의 객체 이다
array는 property의 이름이 양의 2^32보다 작은 정수로 할당될 경우 index property로써
관리 한고 값이 할달 될때 마다 array.length property의 값을 올린다

array.length property의 값은 항상 index의 크기보다 크게 유지 된다

array 관련 method로
filter, map, foreach, fold, foldRight, every, some 등의 함수가 있다 */

function forAll(array, value){
  var result = [];
  var index = 0;
  var length = array.length;
  while(index < length)
  {
    index = array.indexOf(value,index);
    if(index < 0) break;
    else result.push(index);
    index +=1;
  }
  return result;
}

var array = [1,7,2,7,3,7];
console.log(forAll(array,7));
