const http = require('http');

const server = http.createServer((req,res)=> {
    res.write("this is some response from your first node js server");
    res.end();
});

server.listen(3000, ()=>{
    console.log('server is running');
});