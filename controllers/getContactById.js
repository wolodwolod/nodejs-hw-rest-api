const { createError } = require("../helpers");
const Contact = require("../models/contact");


const getContactById = async (req, res, next) => {
    try {
        const { contactId } = req.params;
        const result = await Contact.find({ _id:contactId });
        if (!result) {
            throw createError(404);
        };       
        res.json(result);
    } catch (error) {
        next(error);
    }
};

module.exports = getContactById;