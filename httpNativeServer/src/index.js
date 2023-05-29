/* Começamos importando o modulo nativo: */
const http = require('http');
const routes = require('./routes');
const { URL } = require('url');
const bodyParser = require('./helpers/bodyParser');

/* Iniciando a constução do servidor */
const server = http.createServer((request, response) => {

  /* Utilizando este metodo e o segundo parametro 'parseQueryString' = true
  conseguimos transformar os queryParams em um objeto, pq por padrão ele é uma string. */
  const parsedUrl = new URL(`http://localhost:3000${request.url}`);
  let { pathname } = parsedUrl;
  let id = null;

  /* Neste momento estou logando o metodo http e a url. */
  console.log(`Request method: ${request.method} | endpoint: ${pathname}`);

  const splitEndpoint = pathname.split('/').filter((routeItem)=>Boolean(routeItem));

  if(splitEndpoint.length > 1){
    pathname = `/${splitEndpoint[0]}/:id`;
    id = splitEndpoint[1];
  }

  const route = routes.find((routeObj) => (
    routeObj.endpoint === pathname && routeObj.method === request.method
  ));

  if(route){
    request.query = Object.fromEntries(parsedUrl.searchParams);
    request.params = { id };

    response.send  = (statusCode, body) => {
      /* Estou enviando um statusCode 200 e um JSON como resposta. */
      response.writeHead(statusCode, {'Content-Type': 'application/json'});
      /* O valor do parametro do metodo end deve ser uma string. */
      response.end(JSON.stringify(body));
    }

    if(['POST', 'PUT', 'PATCH'].includes(request.method)) {
      bodyParser(request, () => route.handler(request, response))
    }else {
      route.handler(request, response);
    }

  }else {
    response.writeHead(404, {'Content-Type': 'text/html'});
    response.end(`Cannot ${request.method}  ${parsedUrl.pathname}`);
  }
});

server.listen(3000, () => { console.log('Server started at http://localhost:3000.')});