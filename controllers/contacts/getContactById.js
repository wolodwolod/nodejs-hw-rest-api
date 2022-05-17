const { createError } = require("../../helpers");
const { Contact } = require("../../models_schemas/Contact");


const getContactById = async (req, res, next) => {
    
        const { contactId } = req.params;
        const result = await Contact.findById(contactId);
        if (!result) {
            throw createError(404);
        };       
        res.json(result);
   
};

module.exports = getContactById;