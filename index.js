const express = require('express')
const cors = require('cors')
const logic = require('./services/logic')

const server = express()
server.use(cors({
    origin:'http://localhost:3000'
}))

server.use(express.json())

server.listen(8000,()=>{
    console.log('EMS Server started at port number 8000');
})

// get all contact api
server.get('/get-all-employees',(req,res)=>{
    logic.allEmployee().then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})
// add new employee
server.post('/add-employee',(req,res)=>{
    logic.addEmployee(req.body.id,req.body.empName,req.body.empAge,req.body.empDesg,req.body.empSalary).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})

// delete employee
server.delete('/delete-employee/:id',(req,res)=>{
    logic.removeEmp(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})

// get a employee api
server.get('/get-an-employee/:id',(req,res)=>{
    logic.getAnEmp(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})

// update employee
server.post('/update-employee',(req,res)=>{
    logic.editEmp(req.body.id,req.body.empName,req.body.empAge,req.body.empDesg,req.body.empSalary).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})