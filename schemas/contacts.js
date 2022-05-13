const Joi = require("joi");

const add = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean().default('false')
});

const statusUpdate = Joi.object({  
  favorite: Joi.boolean().required()
});

module.exports = {
  add,
  statusUpdate
};