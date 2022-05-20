const { Contact } = require("../../models_schemas/Contact");

const listContacts = async (req, res, next) => {
        // console.log(req.user.id)
        const owner = req.user.id;
        // let {
        //         page = 1,
        //         limit = 5
        // } = req.query;

        // page = parseInt(page);  
        // limit = parseInt(limit) > 20 ? 20 : parseInt(limit);        

        const result = await Contact.find({ owner })
                // .select({ __v: 0 })
                // .page(page)
                // .limit(limit);
;      
        
        res.json(result);
   
};

module.exports = listContacts;