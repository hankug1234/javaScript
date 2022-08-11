const min = 2;
const max = 10000000;
const primes = [];
const primes2 = [];
function generatePrimes(start,range){
  const end = start + range;
  var prime = true;
  for(let i = start; i< end ; i++){
    for(let j = min; j<Math.sqrt(end);j++){
      if(i!==j && i%j === 0){
        prime = false;
        break;
      }
    }
    if(prime){
      primes.push(i);
    }
    prime = true;
  }

}

function generatePrimes2(start,range){
  const end = start + range;
  var prime = true;
  for(let i = start; i< end ; i++){
    for(let j = min; j<=Math.sqrt(i);j++){
      if(i!==j && i%j === 0){
        prime = false;
        break;
      }

    }
    if(prime){
      primes2.push(i);
    }
    prime = true;
  }

}
console.time('prime');
generatePrimes(min,max);
console.timeEnd('prime');
console.log(primes.length)

console.time('prime2');
generatePrimes2(min,max);
console.timeEnd('prime2');
console.log(primes2.length);
/*
for(let k = 0; k<primes2.length;k++){
  for(var z =0; z<primes.length;z++){
    if(primes2[k] === primes[z]){
      break;
    }
  }
  if(z === primes.length){
    console.log(primes2[k]);
  }
}*/
