const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Julio',
    email: 'juliomarvim@yahoo.com.br',
    phone: '123456676',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
