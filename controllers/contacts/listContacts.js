const { Contact } = require("../../models_schemas/Contact");

const listContacts = async (req, res, next) => {
        // console.log(req.user.id)
        const owner = req.user.id;

        const result = await Contact.find({ owner });      
        res.json(result);
   
};

module.exports = listContacts;