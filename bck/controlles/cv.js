const User = require('../models/user');
const Cv = require('../models/cv') ;

module.exports={
    create : async (req ,res) =>{
        console.log(req.params);
        user=req.params;
        id = user.id ;
        const {titre ,categ ,exp,tel,comp,type } = req.body ;
        const cv = await Cv.create({
            titre,
            categ,
            exp,
            tel,
            comp,
            type,
            user : id
        })
        await cv.save();
        const userById = await User.findById(id);
        userById.cvs.push(cv);
        await userById.save();
        return res.send(userById);
        
    }
}