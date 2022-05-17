const express = require('express');
const ctrl = require("../../controllers/contacts");
const { schemas } = require("../../models_schemas/Contact");
const {validation} = require("../../middlewares");
const router = express.Router();
const { ctrlWrapper } = require("../../helpers");


router.get('/', ctrlWrapper(ctrl.listContacts));

router.get('/:contactId', ctrlWrapper(ctrl.getContactById));

router.post('/', validation(schemas.add), ctrlWrapper(ctrl.addContact));

router.delete('/:contactId', ctrlWrapper(ctrl.removeContact));

router.patch('/:contactId/favorite', validation(schemas.statusUpdate), ctrlWrapper(ctrl.updateStatusContact));

module.exports = router;
