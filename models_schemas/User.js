const { Schema, model } = require("mongoose");
const Joi = require("joi");
// const gravatar = require('gravatar');

const mailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const userSchema = Schema({
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: 5
    },    
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: mailFormat,
        unique: true
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],    
        default: "starter"    
    },
    avatarURL:  {
        type: String        
    },
    token: {
        type: String,
        default: null
    },
    
}, { versionKey: false, timestamps: true });

const User = model("user", userSchema);


const auth = Joi.object({
    password: Joi.string().min(5).required(),
    email: Joi.string().pattern(mailFormat).required(),    
});

const statusUpdate = Joi.object({  
  subscription: Joi.string().valid("starter", "pro", "business").required()
});

const avatarUpdate = Joi.object({  
  avatarURL: Joi.string().required()
}
);

const schemas = {
    auth,
    statusUpdate,
    avatarUpdate
};


module.exports = {
    User,
    schemas
};