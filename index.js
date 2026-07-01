const http = require('http');

const users = [
    { id: 1, name: 'Alice', age: 20 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 30 },
    { id: 4, name: 'David', age: 35 },
    { id: 5, name: 'Eve', age: 40 }
];

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

const server = http.createServer((req, res) => {

    if (req.method === 'GET' && req.url === '/users') {
        res.end(JSON.stringify(users));
    }

    else if (req.method === "POST" && req.url === "/add") {
        req.write()
        req.end()

    } else if (req.method === "GET" && req.url === "/about") {
        res.end("This is a simple Node.js server that serves user data.");
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }

});

