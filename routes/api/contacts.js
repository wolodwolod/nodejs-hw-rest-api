const express = require('express');
const ctrl = require("../../controllers");
const schemas = require("../../models_schemas/contact");
const {validation} = require("../../middlewares");
const router = express.Router();


router.get('/', ctrl.listContacts);

router.get('/:contactId', ctrl.getContactById);

router.post('/', validation(schemas.add), ctrl.addContact);

router.delete('/:contactId', ctrl.removeContact);

router.patch('/:contactId/favorite', validation(schemas.statusUpdate), ctrl.updateStatusContact);

module.exports = router;
