/* Começamos importando o modulo nativo: */
const http = require('http');
const routes = require('./routes');

/* Iniciando a constução do servidor */
const server = http.createServer((request, response) => {
  /* Neste momento estou logando o metodo http e a url. */
  console.log(`Request method: ${request.method} | endpoint: ${request.url}`);

  const route = routes.find((routeObj) => (
    routeObj.endpoint === request.url && routeObj.method === request.method
  ));

  if(route){
    route.handler(request, response);
  }else {
    response.writeHead(404, {'Content-Type': 'text/html'});
    response.end(`Canot ${request.method} ${request.url}`);
  }
});

server.listen(3000, () => { console.log('Server started at http://localhost:3000.')});