const express= require('express')
const Apply = require('../models/apply')
const router = express.Router(); 
const multer = require('multer')





router.get('/allapply', async (req, res) => {
    try {
        const apply = await Apply.find()
        res.json(apply);
     } catch (error) {
         res.json({ message : error });
     }
 });


 //get a cv
 router.get('/apply/:id', async (req, res) => {
    try {
        const apply = await Apply.findById(req.params._id)
        res.json(apply);
     } catch (error) {
         res.json({ message : error });
     }
 });

//add new cv
router.post('/newapply',async(req, res) => {     
    const apply =  new Apply ({
        cvfile : req.file.path,
        nom : req.body.nom,
        email: req.body.email,
        lettre : req.body.lettre
    });
    try {
         const applycv= await Apply.save();
         res.send(applycv);
         
    } catch(error) {
            res.json({ message: error });
    }
    
});

router.post('/upload', async (req,res,next)=>{
    const file = req.files.cvfile;
    file.mv("./uploads" + file.name, function(err,result) {
        if(err)
        throw err ; 
        res.send({
            success : true ,
            message : "file uploaded !"
        })
    })
})

module.exports = router; 