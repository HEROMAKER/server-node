let http = require('http');
let finalhandler = require('finalhandler');
let router = require('router');

let server = http.createServer(function(request, response){
    router(request, response, finalhandler(request, response))
})

server.listen(3000, function(){
    console.log('Server already running on port 3000!!!!')
})