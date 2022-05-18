const { User } = require("../../models_schemas/User");
const { createError } = require("../../helpers");

const current = async (req, res, next) => {
    const { id } = req.user;
    
    const user = await User.findById(id);
    if (!user) {
        throw createError(401, "Not authorized");
    };   

    res.status(201).json(
        {
            email: user.email,
            subscription: user.subscription
        }
    );
};

module.exports = current;