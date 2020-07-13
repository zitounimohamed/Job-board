const express = require('express');
const Cv = require("../models/cv");
const router = express.Router(); 
const multer = require('multer')
const User = require('../models/user')
const Cvs = require('../controlles/cv')

//file pdf 
router.post("/uploadpdf", (req, res) => {
  upload(req, res, err => {
    if (err) {
      console.log(err);
      return res.json({ success: false, err });
    }    

    return res.json({
      success: true,
      pdf: res.req.file.path,
      fileName: res.req.file.filename
    });
  });
});

//image upload
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, "./uploads/");
    },
    filename: function(req, file, cb) {
      cb(null, `${Date.now()}_${file.originalname}`);
    },
    fileFilter: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      if (ext !== ".jpg" || ext !== ".png" || ext !== ".pdf") {
        return cb(res.status(400).end("only jpg, png are allowed"), false);
      }
      cb(null, true);
    }
  });
  var upload = multer({ storage: storage }).single("file");


router.post("/uploadimage", (req, res) => {
    upload(req, res, err => {
      if (err) {
        return res.json({ success: false, err });
      }    
  
      return res.json({
        success: true,
        image: res.req.file.path,
        fileName: res.req.file.filename
      });
    });
  });

//Get cv pop user  
router.get('/mycv/:_id', async (req, res) => {
    try {
        const cv = await Cv.find({writer :req.params._id})
        res.json(cv);
     } catch (error) {
         res.json({ message : error });
     }
 });



//get all
router.post('/allcv', async (req, res) => {
  const title = req.body.titre;
  var condition = title ? {title : {$regex : new RegExp(title), $options : "i"} } :{} ;
  Cv.find(condition).
  then(data =>{
    res.send(data)
  })
  .catch(err =>{
    res.status(500).send({ message :
      err.message || "some error"
    });
  });
 });

 //get a cv
 router.get('/cv/:id', async (req, res) => {
     try {
         const cv = await Cv.findById(req.params._id)
         res.json(cv);
      } catch (error) {
          res.json({ message : error });
      }
  });
//router.post('/create/:id', Cvs.create)


 //add new cv
 router.post('/newcv',  async(req, res) => {     
     /*console.log(req.params);
     user = req.params;
     id = user.id*/

      const cv =  new Cv ({
        titre : req.body.titre,
        categ : req.body.categ,
        exp : req.body.exp , 
        tel : req.body.tel,
        comp : req.body.comp,
        type : req.body.type,
        file : req.body.file,
        filep : req.body.filep,
        writer : req.body.writer
     });
     try {
      const Cvs= await cv.save();      
      res.send(cv);
      user = await User.findById(req.params.writer)
      if(user){
        user.push(cv)
      }
 } catch(error) {
         res.json({ message: error });
 }
     
     
    /* const userById = await User.findById(user);
     userById.cvs.push(cv);
     await userById.save();
     return res.send(userById);
     */
    
 });

 router.get('/userbycv', async (req,res)=>{
     const { id } = req.params;
     const userbycv = await Cv.findById(id).populate('user');
     res.send(userbycv);
 })
     
 
 //delete Job
 router.delete('/deletecv/:cvId', async (req, res) => {
     try {
         const removedcv = await Cv.remove({ _id: req.params.cvId });
         res.json(removedcv);
      } catch (error) {
          res.json({ message : error });
      }
  });
 
  //update Job 
  router.put('/updatecv/:cvId',async  (req,res)=>{
     try {
         const Ucv = await Cv.findByIdAndUpdate({_id: req.params.cvId },req.body)
             .then(function(){
                 Job.findOne({_id : req.params.JobId}).then(function(){
                     res.send(Ucv)
                 })
             })
 
      
     } catch (error) {
         res.json({message : error})
 
     }
 })

 
 module.exports = router; 