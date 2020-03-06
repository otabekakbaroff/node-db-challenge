const express = require('express');

const server = express();

const project=require('./projects/project-router');

const task=require('./tasks/task-router');

const resource=require('./resources/resources-router');

server.use(express.json());

server.use('/api/project', project);

server.use('/api/task', task);

server.use('/api/resource', resource);

server.get('/', (req,res)=>{

    const test=[{Message:`*** SERVER IS UP AND RUNNING AT PORT 5000 ***`}]

    res.status(200).json(test);

})

module.exports = server;