const { User } = require("../../models_schemas/User");
const { createError } = require("../../helpers");

const logout = async (req, res, next) => {
    
    const { _id } = req.user;
  
    const result = await User.findByIdAndUpdate(_id, { token: "" });
    if (!result) {
    throw createError(404);
  };

    res.status(204).json({
        message: "No Content" 
    });
};

module.exports = logout;