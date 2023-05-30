const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'Contact not found.' });
    }

    return response.json(contact);
  }

  store() {
    // Cria um registro.
  }

  update() {
    // atualiza um registro.
  }

  async delete(request, response) {
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'Contact not found.' });
    }

    await ContactsRepository.delete(id);

    // 204: Status no content, deu certo mas não envia nada.
    return response.sendStatus(204);
  }
}

module.exports = new ContactController();
