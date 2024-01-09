// create web server
// 1. load modules
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
// 2. create web server
var server = http.createServer(function(request,response){
    // 2.1 get url
    var parsedUrl = url.parse(request.url);
    var resource = parsedUrl.pathname;
    // 2.2 remove first /
    if(resource == '/'){
        resource = '/index.html';
    }
    // 2.3 read file from web folder
    var resourcePath = '.' + resource;
    console.log(resourcePath);
    fs.readFile(resourcePath, 'utf-8', function(error, data){
        if(error){
            response.writeHead(500, {'Content-Type':'text/html'});
            response.end('500 - Internal Server Error!');
        }else{
            response.writeHead(200, {'Content-Type':'text/html'});
            response.end(data);
        }
    });
});
// 3. start server
server.listen(80, function(){
    console.log('Server running at http://localhost:80');
}
);
// 4. add listener for end event
server.on('connection', function(socket){
    console.log('Client connected');
});
// 5. add listener for close event
server.on('close', function(){
    console.log('Server closed');
});
// 6. add listener for error event
server.on('error', function(error){
    console.log('Error occured: ' + error.message);
});
// 7. add listener for request event
server.on('request', function(request, response){
    console.log('Request event');
});
// 8. add listener for connection event
server.on('connection', function(socket){
    console.log('Connection event');
});
// 9. add listener for close event
server.on('close', function(){
    console.log('Close event');
});
// 10. add listener for error event
server.on('error', function(error){
    console.log('Error event');
});
// 11. add listener for request event
server.on('request', function(request, response){
    console.log('Request event');
});
// 12. add listener for connection event
server.on('connection', function(socket){
    console.log('Connection event');
});
// 13. add listener for close event
server.on('close', function(){
    console.log('Close event');
});
// 14. add listener for error event
server.on('error', function(error){
    console.log('Error event');
});
// 15. add listener for request event
server.on('request', function(request, response){
    console.log('Request event');
});
// 16. add listener for connection event
server.on('connection', function(socket){
    console.log('Connection event');
});
// 17. add listener for close event
server.on('close', function(){
    console.log('Close event');
});
// 18. add listener for error event
server.on('error', function(error){
    console.log('Error event');
});
// 19. add listener for request event
server.on('request', function(request, response){
    console.log('Request event');
});
// 20. add listener for connection event
server.on('connection', function(socket){
    console.log('Connection event');
});
// 21. add listener for close event
server.on('close', function(){
    console.log('Close event');
});
// 22. add listener for error event
server.on('error', function(error){
    console.log('Error event');
});
// 23. add listener for request event
server.on('request', function(request, response){
    console.log('Request event');
});
// 24. add listener for connection event
server.on('connection', function(socket){
    console.log('Connection event');
});
// 25. add listener for close event
server.on('close', function(){
    console.log('Close event');
});
// 26. add listener for error event
server.on('error', function(error){
    console.log('Error event');
});

