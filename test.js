const fs = require('fs');
const http = require('http');
const url = require('url');

// SERVER

const data = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`, 'utf-8');
const DataObj = JSON.parse(data);

const server = http.createServer((req, res) =>{
      const pathname = req.url;

      if (pathname === '/' || pathname === '/overview'){
            res.end('This is OVERVIEW Page');
      } else if ( pathname === '/product'){
            res.end('This is PRODUCT Page');
      } else if ( pathname === '/api'){
            res.writeHead(200, {'content-type': 'application/json'});
            res.end(data);
      }  else {
            res.writeHead(404, {
                  'content-type': 'text/html',
                  'my-own-header': 'Hello world!'
            });
            res.end('<h1>Page Not Found</h1>');
      }
})

server.listen(8000, '127.0.0.1', () =>{
      console.log('Listen from the server on 8000...');
})