const { User } = require("../../models_schemas/User");
const { createError } = require("../../helpers");

const updateUserStatus = async (req, res, next) => {

  const { _id }  = req.user;
    const { subscription } = req.body;    
    
    const updatedUser = await User.findByIdAndUpdate(_id, {$set: {subscription}}, { new: true });
  if (!updatedUser) {
    throw createError(404);
  };
    res.json( {        
        user: {
            email: updatedUser.email,
            subscription: updatedUser.subscription
        }
    });
};

module.exports = updateUserStatus;