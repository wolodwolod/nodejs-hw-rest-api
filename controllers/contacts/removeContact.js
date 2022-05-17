const { createError } = require("../../helpers");
const { Contact } = require("../../models_schemas/Contact");

const removeContact = async (req, res, next) => {

    const { contactId } = req.params;
    const result = await Contact.findByIdAndRemove(contactId);
    if (!result) {
        createError(404);
    }
    res.json({
        message: "Contact deleted"
    })
   
};

module.exports = removeContact;