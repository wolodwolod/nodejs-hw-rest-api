const bcrypt = require("bcryptjs");
const gravatar = require('gravatar');
const { User } = require("../../models_schemas/User");
const { createError, sendEmail } = require("../../helpers");
const { nanoid } = require("nanoid");

const signup = async (req, res, next) => {
    const { email, password, avatarURL = gravatar.url(email) } = req.body;

    const user = await User.findOne({ email });
    if (user) {
        throw createError(409, `Email ${email} in use`);
    };

    const hashPass = await bcrypt.hash(password, 10);
    const verificationToken = nanoid();

    const result = await User.create({
        email,
        password: hashPass,
        avatarURL,
        verificationToken
    });

    const msg = {
        to: email,
        subject: "Confirmation of registration",
        html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Click to confirm your email</a>`
    };
    await sendEmail(msg);    
    
    res.status(201).json({
        user: {
            email: result.email,
            subscription: result.subscription,
            avatarURL
        }
    });


};

module.exports = signup;