const { createError } = require("../helpers");
const Contact = require("../models/contact");

const removeContact = async (req, res, next) => {
  try {
      const { contactId } = req.params;      
        const result = await Contact.remove({ _id:contactId });
        if(!result){
            createError(404);
        }        
        res.json({
            message: "Contact deleted"
        })
    } catch (error) {
        next(error);
    }
}

module.exports = removeContact;