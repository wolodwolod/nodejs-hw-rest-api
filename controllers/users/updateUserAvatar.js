const { User } = require("../../models_schemas/User");
const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");

const { createError } = require("../../helpers");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateUserAvatar = async (req, res, next) => {

    const { _id }  = req.user;
    const { path: tmpDir, filename } = req.file;
    const [extension] = filename.split(".").reverse();
    const newFilename = `avatar.${_id}.${extension}`
    const resultDir = path.join(avatarsDir, newFilename);

    await fs.rename(tmpDir, resultDir);

    const avatarImg = await Jimp.read(resultDir);
    await avatarImg.resize(250, 250).write(resultDir);

    const avatarURL = path.join("avatars", newFilename);    

    const updatedUser = await User.findByIdAndUpdate(_id, {avatarURL}, { new: true });
  if (!updatedUser) {
    throw createError(404);
  };
    res.json( {        
            avatarURL: updatedUser.avatarURL            
        }
    );   
};

module.exports = updateUserAvatar;