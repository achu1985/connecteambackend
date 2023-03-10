const db = require('./db')

// get all employee
const allEmployee = ()=>{
    return db.Employee.find().then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    employees:result
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"No Data is Available"
                }
            }
        }
    )
}

// add employee
const addEmployee = (id,uname,age,desg,salary)=>{
    return db.Employee.findOne({
        id
    }).then((result)=>{
        if(result){
            return{
                statusCode:404,
                message:"Employee is already exist"
            }
        }
        else{
            const newEmp = new db.Employee({
                id,
                uname,
                age,
                desg,
                salary
            })
            newEmp.save()
            return {
                statusCode:200,
                message:"New data added successfully"
            }
        }
    })
}

// delete employee

const removeEmp = (id)=>{
    return db.Employee.deleteOne({
        id
    }).then((result)=>{
        if(result){
            return{
                statusCode:200,
                message:"Data removed successfully"
            }
        }
        else{
            return{
                statusCode:404,
                message:"No data is availiable"
            }
        }
    })
}

// get a particular employee details

const getAnEmp = (id)=>{
    return db.Employee.findOne({
        id
    }).then((result)=>{
        if (result){
            return{
                statusCode:200,
                employee:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"No data is available"
            }
        }
    })
}

// update employee
const editEmp = (id,uname,age,desg,salary)=>{
    return db.Employee.findOne({
        id
    }).then((result)=>{
        if (result){
            result.id = id
            result.uname = uname
            result.age = age
            result.desg = desg
            result.salary = salary
            result.save()
            return{
                statusCode:200,
                message:"Data updated successfully"
            }
        }
        else{
            return{
                statusCode:404,
                message:"No data is available"
            }
        }
    })
}

module.exports = {
    allEmployee,
    addEmployee,
    getAnEmp,
    removeEmp,
    editEmp
}