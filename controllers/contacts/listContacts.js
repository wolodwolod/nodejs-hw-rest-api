const { Contact } = require("../../models_schemas/Contact");

const listContacts = async (req, res, next) => {

        console.log(Contact)
     
        const owner = req.user._id;
        let { page, limit } = req.query;
        const skip = (page - 1) * limit;

        limit = parseInt(limit) > 20 ? 20 : parseInt(limit);        

        const ownerContacts = await Contact.find({ owner })
                .populate("owner", "email")
                .select({ __v: 0 })
                .skip(skip)
                .limit(limit);      
        
        res.json(ownerContacts);
   
};

module.exports = listContacts;