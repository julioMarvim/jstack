/* Começamos importando o modulo nativo: */
const http = require('http');

/* Iniciando a constução do servidor */
const server = http.createServer((request, response) => {
  /* Estou enviando um statusCode 200 e um html como resposta. */
  response.writeHead(200, {'Content-Type': 'text/html'});

  response.end('<h1>Olá Mundo!</h1>');
});

server.listen(3000, () => { console.log('Server started at http://localhost:3000.')});