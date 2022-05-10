const contacts = require("../models/contacts");
const { createError } = require("../helpers");

const updateContact = async (req, res, next) => {
  try {        
        const {contactId} = req.params;
        const {name, email, phone} = req.body;
        const result = await contacts.updateContact(contactId, name, email, phone);
        if(!result){
            throw createError(404);
        }
        res.json(result);
    } catch (error) {
        next(error);
    }
}

module.exports = updateContact;