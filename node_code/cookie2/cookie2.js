const http = require('http');
const fs = require('fs').promises;
const url = require('url')
const qs = require('querystring');

const parseCookies = (cookie='')=>
cookie.split(';').map(v=>v.split('=')).reduce((acc,[k,v])=>
{acc[k.trim()] = decodeURIComponent(v);
return acc;},{});

session = {};

http.createServer(async (req,res) => {
  const cookies = parseCookies(req.headers.cookie);

  if(req.url.startsWith('/login')){
    try{
    const {query} = url.parse(req.url);
    const {name} = qs.parse(query);
    const expires = new Date();
    const uniqueInt = Date.now();
    session[uniqueInt] = {name,expires};
    expires.setMinutes(expires.getMinutes()+5);
    res.writeHead(302,{
      Location: 'http://localhost:8084/',
      'Set-Cookie':`session=${uniqueInt}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
    });
    res.end();
    }
    catch(err){
      console.log(err.message);
    }
  }
  else if(cookies.session && session[cookies.session].expires > new Date())
  {
    res.writeHead(200,{'Content-Type':'text/plain; charset=utf-8'});
    res.end(`${session[cookies.session].name}님 안녕하세요`);
  }
  else {
    try{
      const data = await fs.readFile('node_code\\cookie2\\cookie2.html');
      res.writeHead(200,{'Content-type':'text/html; charset=utf-8'});
      res.end(data);
    }
    catch(err){
      res.writeHead(500,{'Content-Type':'text/plain; charset=utf-8'});
      res.end(err.message);
    }
  }
}).listen(8084,()=>{console.log('8084 ready')});
