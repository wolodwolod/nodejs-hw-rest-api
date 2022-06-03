const { User, schemas } = require("../../models_schemas/User");
const { createError, sendEmail } = require("../../helpers");

const verify = async (req, res, next) => {
    
const {error} = schemas.emailVerify.validate(req.body);
        if(error) {
            throw createError(400, "Missing required field email");
        }
        const {email} = req.body;
        const user = await User.findOne({email});
        if(!user) {
            throw createError(400);
        }
        if(user.verify) {
            throw createError(400, "Verification has already been passed")
        }
        const msg = {
            to: email,
            subject: "Confirmation of registration",
            html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${user.verificationToken}">Click to confirm your email</a>`
        };
    await sendEmail(msg);
    
    res.status(200).json({
       message: "Verification email sent"
    });
};

module.exports = verify;