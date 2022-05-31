const multer = require("multer");
const path = require("path");

const tmpDir = path.join(__dirname, "../", "tmp");

const storage = multer.diskStorage({    
    destination: (req, file, cb) => {
        cb(null, tmpDir);
    },
    filename: (req, file, cb) => {      
        cb(null, file.originalname)

    }
});

const uploadAvatar = multer({ storage });

module.exports = uploadAvatar;
