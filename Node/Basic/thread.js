process.env.UV_THREADPOOL_SIZE = 4

const http = require('http');
const bcrypt = require('bcrypt');


http.createServer((req, res) => {
  bcrypt.hash('Anshul Mishra', 2).then((value) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.write(value)
    res.end()
  })
}).listen(3000)

