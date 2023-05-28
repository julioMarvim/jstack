/* Começamos importando o modulo nativo: */
const http = require('http');
const users = require('./mocks/users');

/* Iniciando a constução do servidor */
const server = http.createServer((request, response) => {
  /* Neste momento estou logando o metodo http e a url. */
  console.log(`Request method: ${request.method} | endpoint: ${request.url}`);

  if(request.url === '/users' && request.method === 'GET'){
    /* Estou enviando um statusCode 200 e um JSON como resposta. */
    response.writeHead(200, {'Content-Type': 'application/json'});
    //O valor do parametro do metodo end deve ser uma string.
    response.end(JSON.stringify(users));
  }else {
    response.writeHead(404, {'Content-Type': 'text/html'});
    response.end(`Canot ${request.method} ${request.url}`);
  }

});

server.listen(3000, () => { console.log('Server started at http://localhost:3000.')});