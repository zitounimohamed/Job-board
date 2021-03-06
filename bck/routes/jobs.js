const express = require('express');
const router = express.Router(); 
const Job = require ('../models/jobs');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const multer = require('multer')

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, "./uploadsjob/");
    },
    filename: function(req, file, cb) {
      cb(null, `${Date.now()}_${file.originalname}`);
    },
    fileFilter: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      if (ext !== ".jpg" || ext !== ".png") {
        return cb(res.status(400).end("only jpg, png are allowed"), false);
      }
      cb(null, true);
    }
  });
  var upload = multer({ storage: storage }).single("file");


router.post("/uploadimage", (req, res) => {
    upload(req, res, err => {
      if (err) {
        console.log(err);
        return res.json({ success: false, err });
      }    
  
      return res.json({
        success: true,
        image: res.req.file.path,
        fileName: res.req.file.filename
      });
    });
  });
  
//get all
/*
router.get('/alljobs/', async (req, res) => {
  //const title = req.params.title;
  //var condition = title ? {title : {$regex : new RegExp(title), $options : "i"} } :{} ;
  Job.find().
  then(data =>{
    res.send(data)
  })
  .catch(err =>{
    res.status(500).send({ message :
      err.message || "some error"
    });
  });
 });
*/
 router.post('/alljobs', async (req, res) => {
  const title = req.body.title;
  var condition = title ? {title : {$regex : new RegExp(title), $options : "i"} } :{} ;
  Job.find(condition).
  then(data =>{
    res.send(data)
  })
  .catch(err =>{
    res.status(500).send({ message :
      err.message || "some error"
    });
  });
 });

//

router.post('/all', async (req, res) => {
  const title = req.body.title;
  const location = req.body.location;
  const type = req.body.type
  var titre = title ? {title : {$regex : new RegExp(title), $options : "i"} } :{} ;
  var lieu = location ? {location : {$regex : new RegExp(location), $options : "i"}} : {} ;
  var condition = type ? {type : {$regex : new RegExp(type), $options : "i"}} : {} ;
  Job.find(condition,lieu,titre).
  then(data =>{
    res.send(data)
  })
  .catch(err =>{
    res.status(500).send({ message :
      err.message || "some error"
    });
  });
 });

 router.get('/jobbyuser/:id', async (req, res) => {
  try {
      const jobs = await Job.find({user :req.params.id});
      res.json(jobs);
   } catch (error) {
       res.json({ message : error });
   }
});
//get a Job
router.get('/:jobID', async (req, res) => {
    try {
        const jobs = await Job.findById(req.params.jobID);
        res.json(jobs);
     } catch (error) {
         res.json({ message : error });
     }
 });

//add new Job
router.post('/newjob',async(req, res) => {
    const Jobs = new Job ({
        email : req.body.email,
        title : req.body.title,
        location: req.body.location,
        region : req.body.region,
        type : req.body.type ,
        description : req.body.description,
        file : req.body.file, 
        salaire : req.body.salaire ,
        genre : req.body.genre ,
        dateexp : req.body.dateexp,
        exigences : req.body.exigences,
        education : req.body.education,
        experience : req.body.experience,
        autres : req.body.autres,
        user : req.body.user



    });
    try {
         const savedJob= await Jobs.save();
         res.send(savedJob);
    } catch(error) {
            res.json({ message: error });
    }
    
});

//delete Job
router.delete('/deletejob/:JobId', async (req, res) => {
    try {
        const removedJobs = await Job.remove({ _id: req.params.JobId });
        res.json(removedJobs);
     } catch (error) {
         res.json({ message : error });
     }
 });

 //update Job 
 router.put('/update/:JobId',async  (req,res)=>{
    try {
        const UJob = await Job.findByIdAndUpdate({_id: req.params.JobId },req.body)
            .then(function(){
                Job.findOne({_id : req.params.JobId}).then(function(){
                    res.send(UJob)
                })
            })

     
    } catch (error) {
        res.json({message : error})

    }
})

router.get('/', async (req, res)=>{
  const title = req.body.title;
  var condition = title ? {title : {$regex : new RegExp(title), $options : "i"} } :{} ;
  Job.find(condition).
  then(data =>{
    res.send(data)
  })
  .catch(err =>{
    res.status(500).send({ message :
      err.message || "some error"
    });
  });
})

module.exports = router; 