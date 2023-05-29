/* Iremos criar um CRUD de usuários. */
const users = require('../mocks/users');
module.exports = {
  listUsers(request, response) {

    const { order } = request.query;

    const sortedUsers = users.sort((a, b) => {
      if(order === 'desc'){
        return a.id < b.id ? 1 : -1;
      }
      return a.id > b.id ? 1: -1;
    });

    /* Estou enviando um statusCode 200 e um JSON como resposta. */
    response.writeHead(200, {'Content-Type': 'application/json'});
    //O valor do parametro do metodo end deve ser uma string.
    response.end(JSON.stringify(sortedUsers));
  }
}