const multer = require("multer");
const path = require("path");

const tmpDir = path.join(__dirname, "../", "tmp");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, tmpDir);
    },
    filename: (req, file, cb) => {
        // const { _id }  = req.user;
        // const [fileName, extension] = file.originalname.split(".");
        // const [, extension] = file.originalname.split(".");
        // cb(null, `avatar.${_id}.${extension}`)
        cb(null, file.originalname)

    }
});

const uploadAvatar = multer({ storage });

module.exports = uploadAvatar;
