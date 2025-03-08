import http from 'http'
const PORT = 8000

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html')

  res.end('<h1>Hello World!</h1>')
})

server.listen(8000, () => {
  console.log('Server running on port ' + PORT)
})
