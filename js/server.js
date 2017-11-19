const myServer = require('http');
const fs = require('fs');

fs.readFile('about.html',(err,html) =>
{
    if(err){
        throw err;
    }
    myServer.createServer((req,res)=>{
        res.writeHead(200,{"Content-Type": "text/html"});
        res.write(html);
        res.end();

    })
    .listen(8080)
});
