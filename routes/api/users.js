const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/users");
const {validation} = require("../../middlewares")
const { ctrlWrapper } = require("../../helpers");
const { schemas } = require("../../models_schemas/User");

router.post('/signup', validation(schemas.signup), ctrlWrapper(ctrl.signup));
router.post('/login', validation(schemas.signup), ctrlWrapper(ctrl.login));


module.exports = router;