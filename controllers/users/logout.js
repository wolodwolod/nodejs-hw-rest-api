const { User } = require("../../models_schemas/User");
const { createError } = require("../../helpers");

const logout = async (req, res, next) => {
    const { id } = req.user;
    // console.log(req.user.id)
    // console.log(id)

    const user = await User.findById(id);
    if (!user) {
        throw createError(401, "Not authorized");
    };

    const result = await User.findByIdAndUpdate(user._id, { token: null });
    if (!result) {
    throw createError(404);
  };

    res.status(204).json({
        message: "No Content" 
    });
};

module.exports = logout;