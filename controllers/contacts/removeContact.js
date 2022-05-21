const { createError } = require("../../helpers");
const { Contact } = require("../../models_schemas/Contact");

const removeContact = async (req, res, next) => {

    const _id = req.params.contactId;
    const owner = req.user._id;   

    const result = await Contact.findOneAndRemove({_id, owner});
    if (!result) {
        createError(404);
    }
    res.json({
        message: "Contact deleted"
    })
   
};

module.exports = removeContact;