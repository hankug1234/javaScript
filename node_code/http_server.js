const http = require('http');

http.createServer((req,res) => {
  res.writeHeader(200,{'Content-type':'text/html; charset=utf-8'});
  res.write('<h1>Hello node!</h1>');
  res.end('<p>Hello Server!</p>');
}).listen(8080,()=>{console.log('ready 8080 port')});
