const http = require('http')
http.createServer((req,res) => {
  console.log(req.url)
}).listen(8083,() => {console.log("8083 ready")})
