//const p =require("./prim_number.js");
const {Worker, isMainThread, parentPort, workerData} = require('worker_threads');

/*
if(isMainThread){
  const worker = new Worker(__filename);
  worker.on('message',(message) => { console.log("from worker",message)});
  worker.on('exit',() => console.log("worker exit"));
  worker.postMessage('ping');

}
else {
  parentPort.on('message',(value) => {
    console.log('from parent',value);
    parentPort.postMessage('pong');
    parentPort.close();
  });
}*/


if(isMainThread){
  var worker = new Worker(__filename);
  worker.on('message',(message) => console.log(message));
  worker.postMessage('hello');
}
else {
parentPort.on('message',(value) => console.log(value));
parentPort.postMessage("heyaasdfdfdfdfdffdfdf");
parentPort.close();
}

/*
if(isMainThread){
  var threads = new Set();
  threads.add(new Worker(__filename,{workerData:{s:1},}));
  threads.add(new Worker(__filename,{workerData:{s:2},}));
  for(let i of threads){
    i.on('message',message => console.log("from woker",message));
    i.on('exit',()=>{
      threads.delete(i);
      if(threads.size === 0){
        console.log('job done');
      }
    });
  }
}
else {
  {
    const data = workerData;
    parentPort.postMessage(data.s+100);
  }
}
*/
