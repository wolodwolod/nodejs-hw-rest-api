const bcrypt = require("bcryptjs");
const { User } = require("../../models_schemas/User");
const { createError } = require("../../helpers");

const register = async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
        throw createError(409, `Email ${email} in use`);
    };

    const hashPass = await bcrypt.hash(password, 10);

    const result = await User.create({ email, password: hashPass });
    res.status(201).json({
        user: {
            email: result.email,
            subscription: result.subscription
        }
    });
};

module.exports = register;