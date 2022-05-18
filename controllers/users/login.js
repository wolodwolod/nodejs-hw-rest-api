const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../../models_schemas/User");
const { createError } = require("../../helpers");
const { SECRET_KEY } = process.env;

const login = async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        throw createError(401, "Email or password is wrong");
    };

    const passwordCompare = await bcrypt.compare(password, user.password);
     if (!passwordCompare) {
        throw createError(401, "Email or password is wrong");
    };

    const payload = {
        id: user._id
    };

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "3h" });
    
    const result = await User.findByIdAndUpdate(user._id, { token: token });
  if (!result) {
    throw createError(404);
  };
    // user.token = token;
    
    res.status(201).json({
        token,
        user: {
            email: user.email,
            subscription: user.subscription
        }
    });
};

module.exports = login;