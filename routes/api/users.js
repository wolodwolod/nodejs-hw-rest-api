const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/users");
const { reqValidation, authValidation, uploadAvatar } = require("../../middlewares");
const { asyncWrapper } = require("../../helpers");
const { schemas } = require("../../models_schemas/User");


router.post('/signup', reqValidation(schemas.auth), asyncWrapper(ctrl.signup));

router.get('/verify/:verificationToken', asyncWrapper(ctrl.verifyToken));

router.post('/verify', asyncWrapper(ctrl.verify));

router.post('/login', reqValidation(schemas.auth), asyncWrapper(ctrl.login));

router.get('/current', authValidation, asyncWrapper(ctrl.current));

router.patch('/subscription', authValidation, reqValidation(schemas.statusUpdate), asyncWrapper(ctrl.updateUserStatus));

router.patch('/avatars', authValidation, uploadAvatar.single("avatar"), asyncWrapper(ctrl.updateUserAvatar));

router.get('/logout', authValidation, asyncWrapper(ctrl.logout));


module.exports = router;