const current = async (req, res, next) => {    

    const { email, subscription, avatarURL } = req.user;    
    
    res.status(201).json(
        {
            email,
            subscription,
            avatarURL
        }
    );
};

module.exports = current;