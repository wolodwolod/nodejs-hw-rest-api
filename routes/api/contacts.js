const express = require('express');
const ctrl = require("../../controllers");
const schemas = require("../../schemas/contacts");
const {validation} = require("../../middlewares");
const router = express.Router();
// const Contact = require("../../models/contact");


// router.get('/', ctrl.listContacts);

// router.get('/:contactId', ctrl.getContactById);

router.post('/', validation(schemas.add), ctrl.addContact);

// router.delete('/:contactId', ctrl.removeContact);

// router.put('/:contactId', validation(schemas.add), ctrl.updateContact);

module.exports = router;
