const http = require('http');
 
const host = '0.0.0.0';
const port = 80;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World - my first Docker Image!');
});
 
server.listen(port, host, () => {
   console.log('Web server running at http://%s:%s',host,port );
});