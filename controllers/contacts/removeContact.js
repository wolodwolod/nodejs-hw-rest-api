const { createError } = require("../../helpers");
const { Contact } = require("../../models_schemas/Contact");

const removeContact = async (req, res, next) => {

    const { contactId } = req.params;
    const owner = req.user.id;   

    const result = await Contact.findOneAndRemove({_id: contactId, owner});
    if (!result) {
        createError(404);
    }
    res.json({
        message: "Contact deleted"
    })
   
};

module.exports = removeContact;