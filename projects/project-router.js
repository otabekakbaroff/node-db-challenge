const express = require('express');
const router = express.Router();
const project=require("./project-model");



//GET ALL Projects
router.get('/', (req, res) => {
    project.find().then(proj=>{
        res.status(200).json(proj);
    }).catch(err=>{
        console.log(err);
        res.status(500).json({errorMessage:'Something Went Wrong'})
    })
});


//GET projects BY ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    project.findById(id).then(proj=>{
        res.status(200).json(proj);
    }).catch(err=>{
        res.status(500).json({errorMessage:'Something Went Wrong'})
    })
});

//GET ALL TASKS FOR THE PROJECT
router.get('/:id/tasks',(req,res)=>{
    const { id } = req.params;
    project.findTasks(id).then(proj=>{
        res.status(200).json(proj);
    }).catch(err=>{
        console.log(err);
        res.status(500).json({errorMessage:'Failure isn\'t an option, but this failed :('})
    })
})

router.post('/',(req,res)=>{
    const actionInfo=req.body
    project.add(actionInfo).then(proj=>{
        res.status(201).json(proj);
    }).catch(err=>{
        console.log(err);
        res.status(500).json({errorMessage:'OPPS :('})
    })
})

  
 //PUT (EDIT PROJECT) 
router.put('/:id', (req, res) => {
    const actionInfo = req.body;
    const { id } = req.params;
    project.update(id,actionInfo).then(proj=>{
        res.status(201).json(proj);
    }).catch(err=>{
        console.log(err)
        res.status(500).json({errorMessage:'ERROR'})
    })
  });
  

//DELETE PROJECT 
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    project.remove(id).then(proj=>{
        res.status(201).json(proj);
    }).catch(err=>{
        res.status(500).json({errorMessage:'FAILED TO DELETE'})
    })
});


  
  module.exports = router;