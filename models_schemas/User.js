const { Schema, SchemaTypes, model } = require("mongoose");
const Joi = require("joi");

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
    token: {
        type: String,
        default: null
    },
    owner: {
        type: SchemaTypes.ObjectId,
        ref: 'user'      
    }
}, { versionKey: false, timestamps: true });

const User = model("user", userSchema);


const signup = Joi.object({
    password: Joi.string().min(5).required(),
    email: Joi.string().pattern(mailFormat).required(),    
});

const schemas = {
    signup
};


module.exports = {
    User,
    schemas
};