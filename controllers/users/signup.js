const bcrypt = require("bcryptjs");
const gravatar = require('gravatar');
const { User } = require("../../models_schemas/User");
const { createError } = require("../../helpers");

const signup = async (req, res, next) => {
    const { email, password, avatarURL = gravatar.url(email) } = req.body;

    const user = await User.findOne({ email });
    if (user) {
        throw createError(409, `Email ${email} in use`);
    };

    const hashPass = await bcrypt.hash(password, 10);

    const result = await User.create({ email, password: hashPass, avatarURL });
    
    // const updatedUser = await User.findOneAndUpdate(email, {$set: {avatarURL}}, { new: true });
    
    res.status(201).json({
        user: {
            email: result.email,
            subscription: result.subscription,
            avatarURL
        }
    });


};

module.exports = signup;