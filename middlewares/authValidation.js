const jwt = require('jsonwebtoken');
const { createError } = require('../helpers');
const { SECRET_KEY } = process.env;
const { User } = require("../models_schemas/User");

const authValidation = async (req, res, next) => {
  try {    
    const {authorization} = req.headers;
    if (!authorization) {
        throw createError(401, 'Please, provide a token in request authorization header');        
      };

    const [bearer, token] = authorization.split(' ');
    if (bearer !== "Bearer" || !token) {
      throw createError(401, 'Please, provide a token');
      };

    try {      
        if (jwt.verify(token, SECRET_KEY)) {
            const user = jwt.decode(token, SECRET_KEY);

            const result = await User.findById(user.id);
            if(!result || (result.token !== token)){
                throw createError(401);
            }

    //   req.token = token;
      req.user = user;
         
        };
    } catch (error) {
        throw createError(401, 'Not authorized');
    }         
      next();
      
  } catch (error) {
    next(error);
  }
};

module.exports = authValidation;
