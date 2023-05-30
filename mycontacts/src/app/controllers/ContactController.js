const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
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
