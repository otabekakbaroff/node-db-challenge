const express = require('express');
const router = express.Router();
const resources=require("./resources-model");



//GET ALL classes
router.get('/', (req, res) => {
    resources.find().then(clazs=>{
        res.status(200).json(clazs);
    }).catch(err=>{
        console.log(err);
        res.status(500).json({errorMessage:'Something Went Wrong'})
    })
});


//GET class BY ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    resources.findById(id).then(clazs=>{
        res.status(200).json(clazs);
    }).catch(err=>{
        res.status(500).json({errorMessage:'Something Went Wrong'})
    })
});

router.post('/',(req,res)=>{
    const actionInfo=req.body
    resources.add(actionInfo).then(clazs=>{
        res.status(201).json(clazs);
    }).catch(err=>{
        console.log(err);
        res.status(500).json({errorMessage:'OPPS :('})
    })
})

  
 //PUT (EDIT ACTION) 
router.put('/:id', (req, res) => {
    const actionInfo = req.body;
    const { id } = req.params;
    resources.update(id,actionInfo).then(clazs=>{
        res.status(201).json(clazs);
    }).catch(err=>{
        res.status(500).json({errorMessage:'ERROR'})
    })
  });
  

//DELETE ACTION 
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    resources.remove(id).then(clazs=>{
        res.status(201).json(clazs);
    }).catch(err=>{
        res.status(500).json({errorMessage:'FAILED TO DELETE'})
    })
});


  
  module.exports = router;