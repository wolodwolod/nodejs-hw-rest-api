const express = require('express');
const ctrl = require("../../controllers/contacts");
const { schemas } = require("../../models_schemas/Contact");
const {authValidation} = require("../../middlewares");
const {reqValidation} = require("../../middlewares");
const router = express.Router();
const { asyncWrapper } = require("../../helpers");


router.use(authValidation);


router.get('/', asyncWrapper(ctrl.listContacts));

router.get('/:contactId', asyncWrapper(ctrl.getContactById));

router.post('/', reqValidation(schemas.add), asyncWrapper(ctrl.addContact));

router.delete('/:contactId', asyncWrapper(ctrl.removeContact));

router.patch('/:contactId/favorite', reqValidation(schemas.statusUpdate), asyncWrapper(ctrl.updateStatusContact));

module.exports = router;
