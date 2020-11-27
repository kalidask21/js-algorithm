const http = require('http')

const server = http.createServer(function(req,res){
    // Handle Request.

    if(req.url === '/'){
        res.writeHead(200,{ 'Content-Type':'text/html'})
        res.write('<p> Hello </p>');
        res.end();
    }

    if(req.url === '/home'){
        res.writeHead(200,{ 'Content-Type':'text/html'})
        res.write('<p> Welcome Home !! </p>');
        res.end();
    }
})

server.listen(9080);

console.log('Node.js web server at port 5000 is running..')
