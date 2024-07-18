const fs = require('fs');
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    con
    res.end('Hello from the server');
});

// Start the server
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});