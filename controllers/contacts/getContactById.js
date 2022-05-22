const { createError } = require("../../helpers");
const { Contact } = require("../../models_schemas/Contact");


const getContactById = async (req, res, next) => {
    const owner = req.user._id;    
    const _id = req.params.contactId;
    
    const contact = await Contact.findOne({_id, owner});
    if (!contact) {
            throw createError(404);
        };       
        res.json(contact);
   
};

module.exports = getContactById;