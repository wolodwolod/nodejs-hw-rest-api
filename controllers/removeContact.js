// const contacts = require("../models/contacts");
// const { createError } = require("../helpers");

// const removeContact = async (req, res, next) => {
//   try {
//         const {id} = req.params;
//         const result = await contacts.removeContact(id);
//         if(!result){
//             createError(404);
//         }        
//         res.json({
//             message: "Contact deleted"
//         })
//     } catch (error) {
//         next(error);
//     }
// }

// module.exports = removeContact;