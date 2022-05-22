const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/users");
const { reqValidation } = require("../../middlewares");
const { authValidation } = require("../../middlewares");
const { asyncWrapper } = require("../../helpers");
const { schemas } = require("../../models_schemas/User");

router.post('/signup', reqValidation(schemas.auth), asyncWrapper(ctrl.signup));

router.post('/login', reqValidation(schemas.auth), asyncWrapper(ctrl.login));

router.get('/logout', authValidation, asyncWrapper(ctrl.logout));

router.get('/current', authValidation, asyncWrapper(ctrl.current));

router.patch('/subscription', authValidation, reqValidation(schemas.statusUpdate), asyncWrapper(ctrl.updateUserStatus));


module.exports = router;