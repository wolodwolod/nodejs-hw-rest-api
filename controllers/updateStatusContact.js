const { createError } = require("../helpers");
const Contact = require("../models/contact");

const updateStatusContact = async (req, res, next) => {
  try {     
    const { contactId } = req.params;        
      const { favorite } = req.body;
    
      const update = await Contact.findByIdAndUpdate({ _id: contactId }, { favorite: favorite });
      if (!update) {
            throw createError(404);
    };  
        
    // const contact = await Contact.find({ _id:contactId });
    //     if (!contact) {
    //         throw createError(404);
    // };    
    // contact[0].favorite = favorite;
    
    // await Contact.create(contact);
    // const result = await Contact.find({ _id: contactId });
      const result = await Contact.find({ _id: contactId });
      
        res.json(result);
    } catch (error) {
        next(error);
    }
}

module.exports = updateStatusContact;