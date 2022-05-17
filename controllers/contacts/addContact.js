const { Contact } = require("../../models_schemas/Contact");
// console.log(Contact)

const addContact = async (req, res, next) => {
    
        const result = await Contact.create(req.body);
        res.status(201).json(result);
    
};

module.exports = addContact;