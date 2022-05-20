const { createError } = require("../../helpers");
const { Contact } = require("../../models_schemas/Contact");


const getContactById = async (req, res, next) => {
    const owner = req.user.id;    
    const { contactId } = req.params;
    
    const result = await Contact.findOne({_id: contactId, owner});
    if (!result) {
            throw createError(404);
        };       
        res.json(result);
   
};

module.exports = getContactById;