const { Contact } = require("../../models_schemas/Contact");

const addContact = async (req, res, next) => {
        const { name, email, phone, favorite } = req.body;

        const owner = req.user._id;
    
        const result = await Contact.create({name, email, phone, favorite, owner});
        res.status(201).json(result);
    
};

module.exports = addContact;