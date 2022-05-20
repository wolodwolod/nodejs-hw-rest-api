const { User } = require("../../models_schemas/User");
const { createError } = require("../../helpers");

const updateStatusUser = async (req, res, next) => {
    const { id } = req.user;
    const { subscription } = req.body;

    const user = await User.findById(id);
    if (!user) {
        throw createError(401, "Not authorized");
    };
    
    const result = await User.findOneAndUpdate(user._id, {$set: {subscription}}, { new: true });
  if (!result) {
    throw createError(404);
  };
    res.json( {        
        user: {
            email: user.email,
            subscription: user.subscription
        }
    });
};

module.exports = updateStatusUser;