const ContactsRepository = require('../repositories/ContactsRepository');
const CategoriesRepository = require('../repositories/CategoriesRepository');

class ContactController {
  async index(request, response) {
    const { orderBy } = request.query;
    const contacts = await ContactsRepository.findAll(orderBy);
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

  async store(request, response) {
    const {
      name, email, phone, category_id,
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required.' });
    }

    const contactExists = await ContactsRepository.findByEmail(email);
    const categoryExists = await CategoriesRepository.findById(category_id);

    if (contactExists) {
      return response.status(400).json({ error: 'This e-mail is already in use.' });
    }

    if (!categoryExists) {
      return response.status(404).json({ error: 'Category not found' });
    }

    const contact = await ContactsRepository.create({
      name, email, phone, category_id,
    });

    console.log(contact);

    return response.json(contact);
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      name, email, phone, category_id,
    } = request.body;

    const contactExists = await ContactsRepository.findById(id);
    const categoryExists = await CategoriesRepository.findById(category_id);

    if (!contactExists) {
      return response.status(404).json({ error: 'Contact not found' });
    }

    if (!categoryExists) {
      return response.status(404).json({ error: 'Category not found' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Name is required.' });
    }

    const contactByEmail = await ContactsRepository.findByEmail(email);

    if (contactByEmail && contactByEmail.id !== id) {
      return response.status(400).json({ error: 'This e-mail is already in use.' });
    }

    const contact = await ContactsRepository.update(id, {
      name, email, phone, category_id,
    });

    return response.json(contact);
  }

  async delete(request, response) {
    const { id } = request.params;

    await ContactsRepository.delete(id);

    // 204: Status no content, deu certo mas não envia nada.
    return response.sendStatus(204);
  }
}

module.exports = new ContactController();
