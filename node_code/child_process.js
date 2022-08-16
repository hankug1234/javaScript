/*const exec = require('child_process').exec;
const process = exec('dir');
process.stdout.on('data',function(data){console.log(data.toString())});
process.stderr.on('data',function(data){console.error(data.toStirng())});*/
/*
const spawn = require("child_process").spawn;
const process = spawn('python',['C:\\Users\\LG\\projectA\\star.py']);
process.stdout.on('data',function(data){
  console.log(data.toString());
});
process.stderr.on('data',function(data){console.error(data.toString())});
*/
const fs = require('fs');
fs.readFile("D:\\javaScript\\README.md",(err,data)=>
{
  if(err){
    throw err;
  }
  console.log(data);
  console.log(data.toString());
});
