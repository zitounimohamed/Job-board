const express= require('express')
const Apply = require('../models/apply')
const router = express.Router(); 
const multer = require('multer')


var storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, "./uploadspdf/");
    },
    filename: function(req, file, cb) {
      cb(null, `${Date.now()}_${file.originalname}`);
    },
    fileFilter: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      if (ext !== ".pdf") {
        return cb(res.status(400).end("only pdf files are allowed"), false);
      }
      cb(null, true);
    }
  });
  var upload = multer({ storage: storage }).single("file");


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


  router.delete('/deleteapp/:id', async (req, res) => {
    try {
        const removedapp = await Apply.remove({ _id: req.params.id });
        res.json(removedapp);
     } catch (error) {
         res.json({ message : error });
     }
 });
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

//add new apply
router.post('/newapply',async(req, res) => {     
    const apply =  new Apply ({
        file : req.body.file,
        nom : req.body.nom,
        email: req.body.email,
        lettre : req.body.lettre,
        user : req.body.user,
        jobuser : req.body.jobuser
    });
    try {
        const savedapply= await apply.save();
        res.send(savedapply);
   } catch(error) {
           res.json({ message: error });
   }
    
});

//Get cv pop user  
router.get('/myapply/:_id', async (req, res) => {
  try {
      const app = await Apply.find({user :req.params._id})
      res.json(app);
   } catch (error) {
       res.json({ message : error });
   }
});
//get jobs applies
router.get('/jobsapply/:_id', async (req, res) => {
  try {
      const app = await Apply.find({jobuser :req.params._id})
      res.json(app);
   } catch (error) {
       res.json({ message : error });
   }
});



module.exports = router; 