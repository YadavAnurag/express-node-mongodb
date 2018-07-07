const express = require('express');

const students = require('../data/students.json');
const _ = require('lodash');







const router = express.Router();


router.get('/', (req, res)=>{

    res.json(students);    
});

router.get('/:id', (req, res)=>{
    console.log(students);

    
    const student = _.find(students, {"id":Number(req.params.id)});
    //console.log(student);
    
    if(student)
        res.json(student);
    else{
        res.send(`student does not found with id:${req.params.id}`);
    }

    console.log(req.params.id);
    
    res.end('for particular id');

});

router.post('/', (req, res)=>{
    
    console.log('Handling post request');
    res.end();
    
});

router.put('/', (req, res)=>{
    
    console.log('Handling put request');
    re.end();
    
});

router.delete('/', (req, res)=>{
    
    console.log('Handling delete request');
    res.end();
    
});

module.exports = router;