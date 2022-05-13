const { createError } = require("../helpers");
const { Contact } = require("../models_schemas/contact");

const updateStatusContact = async (req, res, next) => {
  try {     
    const { contactId } = req.params;        
      const { favorite } = req.body;
    
      const result = await Contact.findByIdAndUpdate(contactId, { favorite: favorite }, {new:true});
      if (!result) {
            throw createError(404);
    };     
        res.json(result);
    } catch (error) {
        next(error);
    }
}

module.exports = updateStatusContact;