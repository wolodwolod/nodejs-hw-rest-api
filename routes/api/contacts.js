const express = require('express');
const ctrl = require("../../controllers");
const schemas = require("../../schemas/contacts");
const {validation} = require("../../middlewares");
const router = express.Router();


router.get('/', ctrl.listContacts);

router.get('/:contactId', ctrl.getContactById);

router.post('/', validation(schemas.add), ctrl.addContact);

router.delete('/:contactId', ctrl.removeContact);

router.patch('/:contactId/favorite', validation(schemas.favorite), ctrl.updateStatusContact);

module.exports = router;
