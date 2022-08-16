const{Worker, isMainThread,workerData,parentPort} = require('worker_threads');
let primes = [];
const min = 2;

function generatePrimes(start,range){
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
      primes.push(i);
    }
    prime = true;
  }
}

if(isMainThread){
  const max = 10000000;
  const threadCount = 8;
  const threads = new Set();
  const range = Math.floor((max-min)/threadCount);
  var start = min;
  console.time('prime');
  for(let i=0; i<threadCount-1;i++){
    Start = start
    threads.add(new Worker(__filename,{workerData:{start:Start,range}}));
    start+=range;

  }
  threads.add(new Worker(__filename,{workerData:{start,range:max - start}}));
  for(let worker of threads){
    worker.on('error',err =>{throw err});
    worker.on("exit",()=>{
      threads.delete(worker);
      if(threads.size === 0){
        console.timeEnd('prime');
        console.log(primes.length);
      }
    });
    worker.on('message',(msg)=>{primes = primes.concat(msg);});
  }
}
else{
  generatePrimes(workerData.start,workerData.range);
  parentPort.postMessage(primes);
  console.log(primes);
}
