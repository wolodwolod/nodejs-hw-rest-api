const fs = require('fs/promises')
const { nanoid } = require("nanoid");
const path = require("path");


const contactsPath = path.join(__dirname, "./contacts.json");

async function updateContacts(contacts) {
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
};

const listContacts = async () => {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;  
};

const getContactById = async (contactId) => {    
    const contacts = await listContacts();
    const result = contacts.find(item => item.id === contactId);
    if (!result) {
      return null;
    }    
    return result;  
};

const removeContact = async (contactId) => {  
    const contacts = await listContacts();
    const idx = contacts.findIndex(item => item.id === contactId);
    if (idx === -1) {
      return null;
    }
    const [result] = contacts.splice(idx, 1);
    await updateContacts(contacts);
    return result;  
};

const addContact = async (name, email, phone) => {    
    const contacts = await listContacts();
    const newContact = {
      id: nanoid(),
      name,
      email,
      phone
    };
    contacts.push(newContact);
    await updateContacts(contacts);
    return newContact;  
};

const updateContact = async (contactId, name, email, phone) => {  
  const contacts = await listContacts();
  const result = contacts.find(item => item.id === contactId);
  if (!result) {
    return null;
  }
  result.name = name;
  result.email = email;
  result.phone = phone;  
  await updateContacts(contacts);
  return result;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
