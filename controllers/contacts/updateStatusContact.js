const { createError } = require("../../helpers");
const { Contact } = require("../../models_schemas/Contact");

const updateStatusContact = async (req, res, next) => {
 
  const { contactId } = req.params;
  const { favorite } = req.body;
  const owner = req.user.id;
    
  const result = await Contact.findOneAndUpdate({_id: contactId, owner}, {$set: {favorite}}, { new: true });
  if (!result) {
    throw createError(404);
  };
  res.json(result);
   
};

module.exports = updateStatusContact;