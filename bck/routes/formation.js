const express = require('express');
const router = express.Router(); 
const forma = require('../models/formation');


router.get("/formations",async (req, res)=>{
    try {
        const formation = await forma.find();
        res.json(formation);
     } catch (error) {
         res.json({ message : error });
     }
})

router.get('/:id', async (req, res) => {
    try {
        const formation = await forma.findById(req.params.id)
        res.json(formation);
     } catch (error) {
         res.json({ message : error });
     }
 });

router.post('/newforma',async (req, res)=>{
   
        const formation = new forma({
            email : req.body.email,
            titre : req.body.titre,
            lieu : req.body.lieu,
            ville : req.body.ville,
            type : req.body.type,
            description : req.body.description
        })

    try {
        const savedforma= await formation.save();
        res.send(savedforma);
    } catch (error) {
        res.json({ message: error });

    }
})

router.delete('/:id', async (req, res) => {
    try {
        const removedforma = await Job.remove({ _id: req.params.id });
        res.json(removedforma);
     } catch (error) {
         res.json({ message : error });
     }
 });

 module.exports = router; 