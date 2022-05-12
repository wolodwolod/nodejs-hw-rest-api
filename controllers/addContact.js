// const contacts = require("../models/contacts");
const Contact = require("../models/contact");
console.log(Contact)

const addContact = async (req, res, next) => {
    try {        
        const result = await Contact.create(req.body);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};

module.exports = addContact;