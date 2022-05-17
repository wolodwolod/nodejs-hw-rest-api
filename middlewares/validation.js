const validation = (schema) => {
    const func = (req, res, next) => {
        // console.log(req.body)
        const {error} = schema.validate(req.body);
        if (error) {
            console.log(error)
            error.status = 400;           
            next(error);
            return;
        }
        next()
    };

    return func;
};

module.exports = validation;