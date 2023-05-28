/* Iremos criar um CRUD de usuários. */
const users = require('../mocks/users');
module.exports = {
  listUsers(request, response) {
    /* Estou enviando um statusCode 200 e um JSON como resposta. */
    response.writeHead(200, {'Content-Type': 'application/json'});
    //O valor do parametro do metodo end deve ser uma string.
    response.end(JSON.stringify(users));
  }
}