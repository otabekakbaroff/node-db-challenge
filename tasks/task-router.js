const express = require('express');
const router = express.Router();
const task=require("./task-model");



//GET ALL classes
router.get('/', (req, res) => {
    task.find().then(clazs=>{
        res.status(200).json(clazs);
    }).catch(err=>{
        console.log(err);
        res.status(500).json({errorMessage:'Something Went Wrong'})
    })
});


//GET class BY ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    task.findById(id).then(clazs=>{
        res.status(200).json(clazs);
    }).catch(err=>{
        res.status(500).json({errorMessage:'Something Went Wrong'})
    })
});

//GET ALL CLIENTS FOR THE CLASS
router.get('/:id/resources',(req,res)=>{
    const { id } = req.params;
    task.findResources(id).then(clazs=>{
        res.status(200).json(clazs);
    }).catch(err=>{
        console.log(err);
        res.status(500).json({errorMessage:'Failure isn\'t an option, but this failed :('})
    })
})

router.post('/',(req,res)=>{
    const actionInfo=req.body
    task.add(actionInfo).then(clazs=>{
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
    task.update(id,actionInfo).then(clazs=>{
        res.status(201).json(clazs);
    }).catch(err=>{
        res.status(500).json({errorMessage:'ERROR'})
    })
  });
  

//DELETE ACTION 
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    task.remove(id).then(clazs=>{
        res.status(201).json(clazs);
    }).catch(err=>{
        res.status(500).json({errorMessage:'FAILED TO DELETE'})
    })
});


  
  module.exports = router;