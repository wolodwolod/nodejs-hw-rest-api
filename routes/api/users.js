const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/users");
const {validation} = require("../../middlewares")
const { ctrlWrapper } = require("../../helpers");
const { schemas } = require("../../models_schemas/User");

console.log(schemas)

router.post('/signup', validation(schemas.signup), ctrlWrapper(ctrl.signup));


module.exports = router;