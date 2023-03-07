const http = require('http');
const { json } = require('stream/consumers');

const server = http.createServer((req,res)=>{
     const url = req.url;
     if(url=='/home'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>Welcome home</h1>')
        return res.end();
     }
     if(url=='/about'){
      res.writeHead(200,{'content-type':'text/html'})
      res.write('<h1>Welcome to about us page</h1>')
      return res.end();
   }
   if(url=='/node'){
      res.writeHead(200,{'content-type':'text/html'})
      res.write('<h1>Welcome to my Node Js project</h1>')
      return res.end();
   }
});

  server.listen(3000)