/* Começamos importando o modulo nativo: */
const http = require('http');
const routes = require('./routes');
const url = require('url');

/* Iniciando a constução do servidor */
const server = http.createServer((request, response) => {
  
  /* Utilizando este metodo e o segundo parametro 'parseQueryString' = true
  conseguimos transformar os queryParams em um objeto, pq por padrão ele é uma string. */
  const parsedUrl = url.parse(request.url, true);

  /* Neste momento estou logando o metodo http e a url. */
  console.log(`Request method: ${request.method} | endpoint: ${parsedUrl.pathname}`);

  const route = routes.find((routeObj) => (
    routeObj.endpoint === parsedUrl.pathname && routeObj.method === request.method
  ));

  if(route){
    request.query = parsedUrl.query;
    route.handler(request, response);
  }else {
    response.writeHead(404, {'Content-Type': 'text/html'});
    response.end(`Cannot ${request.method}  ${parsedUrl.pathname}`);
  }
});

server.listen(3000, () => { console.log('Server started at http://localhost:3000.')});