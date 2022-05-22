const { createError } = require("../../helpers");
const { Contact } = require("../../models_schemas/Contact");

const updateContactStatus = async (req, res, next) => {
 
  const _id = req.params.contactId;
  const { favorite } = req.body;
  const owner = req.user._id;
    
  const updatedContact = await Contact.findOneAndUpdate({_id, owner}, {$set: {favorite}}, { new: true });
  if (!updatedContact) {
    throw createError(404);
  };
  res.json(updatedContact);
   
};

module.exports = updateContactStatus;