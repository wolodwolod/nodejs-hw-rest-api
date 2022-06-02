const signup = require("./signup");
const login = require("./login");
const logout = require("./logout");
const current = require("./current");
const updateUserStatus = require("./updateUserStatus");
const updateUserAvatar = require("./updateUserAvatar");
const verifyToken = require("./verifyToken");
const verify = require("./verify");

module.exports = {
    signup,
    login,
    logout,
    current,
    updateUserStatus,
    updateUserAvatar,
    verifyToken,
    verify
};