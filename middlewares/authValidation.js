const jwt = require('jsonwebtoken');
const { createError } = require('../helpers');
const { SECRET_KEY } = process.env;

const authValidation = (req, res, next) => {
  try {
    // TODO: validate token type later
    const {authorization} = req.headers;
    if (!authorization) {
        throw createError(401, 'Please, provide a token in request authorization header');        
      };

    const [, token] = authorization.split(' ');
    if (!token) {
      throw createError(401, 'Please, provide a token');
      };

    try {      
        if (jwt.verify(token, SECRET_KEY)) {
          const user = jwt.decode(token, SECRET_KEY);

      req.token = token;
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
