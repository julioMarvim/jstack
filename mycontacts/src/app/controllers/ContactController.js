class ContactController {
  index(request, response) {
    response.send('Send to Contact Controller');
  }

  show() {
    // obtem um registro.
  }

  store() {
    // Cria um registro.
  }

  update() {
    // atualiza um registro.
  }

  delete() {
    // deleta  um registro.
  }
}

module.exports = new ContactController();
