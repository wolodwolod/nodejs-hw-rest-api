const { Schema, model } = require("mongoose");
const Joi = require("joi");

const contactSchema = Schema({
     
    name: {
        type: String,
        required: [true, 'Set name for contact'],
    },
    email: {
        type: String,
        required: [true, 'Set email for contact'],
    },
    phone: {
        type: String,
    },
    favorite: {
        type: Boolean,
        default: false,
    }
});

const Contact = model("contact", contactSchema);

const add = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean().default('false')
});

const statusUpdate = Joi.object({  
  favorite: Joi.boolean().required()
});

const schemas = {
    add,
    statusUpdate
};


module.exports = {
    Contact,
    schemas
}; 