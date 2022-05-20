const { Contact } = require("../../models_schemas/Contact");

const listContacts = async (req, res, next) => {
        // console.log(req.user.id)
        const owner = req.user.id;
        let { page, limit } = req.query;
        const skip = (page - 1) * limit;

        limit = parseInt(limit) > 20 ? 20 : parseInt(limit);        

        const result = await Contact.find({ owner })
                .populate("owner", "email")
                .select({ __v: 0 })
                .skip(skip)
                .limit(limit);
;      
        
        res.json(result);
   
};

module.exports = listContacts;