// 1 import express
 const express = require('express')

 //2 import cors

 const cors = require('cors')

 //import logic
 const logic = require('./services/logic')

 //3 create a backend application using express
  const emsServer = express()

  //4 connecting the frontend appilication using cors
  emsServer.use(cors({
    origin:'http://localhost:3000'
  }))

  //5 convert the json data to js and js to json using json() function
  emsServer.use(express.json())

  //6 Define the port number
  emsServer.listen(8000,()=>{
    console.log('Ems server listening on port 8000');
  })

  //API call for get all 
  emsServer.get('/get-all-employees',(req,res)=>{
    logic.getAllEmployees().then((response)=>{ //response - all the details
      res.status(response.statusCode).json(response);
    })
  })

  //api call for add 
emsServer.post('/add-an-employee',(req,res)=>{
  logic.addEmployee(req.body.id,req.body.name,req.body.task,req.body.technologies).then((response)=>{
    res.status(response.statusCode).json
  })
})

//API call for delete 
emsServer.delete('/delete-an-employee/:id',(req,res)=>{
  logic.deletedata(req.params.id).then((response)=>{
    res.status(response.statusCode).json(response);
  })
})
//API call for view 
emsServer.get('/view-an-employee/:id',(req,res)=>{
  logic.viewdata(req.params.id).then((response)=>{
    res.status(response.statusCode).json(response);
  })
})
//api call for update
emsServer.post('/update-an-employee/:id',(req,res)=>{
  logic.updateAnEmployee(req.params.id,req.body.name,req.body.task,req.body.technologies).then((response)=>{
      res.status(response.statusCode).json(response);
  })
})
