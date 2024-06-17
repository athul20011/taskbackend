//BackEnd logic

//import db.js file
const db = require('../services/db')

//get all the  details from the database

const getAllEmployees = ()=>{
    return db.employee.find().then((result)=>{//result - details 
        if(result){
            return{
                statusCode:200,
                employees:result
            }
        }
        else{ 
            return{
                statusCode:404,
                message:'cant find employee'
            }
        }
    })
}
//add a new  details into the database
const addEmployee=(id,name,task,technologies)=>{
    return db.employee.findOne({id}).then((result)=>{
        if(result){
            
            return{
                statusCode:404,
                message:"employee already exists"
            }
        } 
        else{//this id is not in the database then it save to database
            const newEmployee = new db.employee({id,name,task,technologies})
            //to save to the database
            newEmployee.save()
            return{
                statusCode:200,
                message:"employee add successfully"
            }
        }
    })
}
//delete 
const deletedata=(id)=>{
    return db.employee.deleteOne({id}).then((result)=>{
            return{
                statusCode:200,
                message:"delete successfully"
            }
    })
    .catch((error)=>{
        return{
            statusCode:401,
            message:"failed to delete "
        }
    })
  }
//view page
  const viewdata=(id)=>{
    return db.employee.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                employees:result
            }

        }
        else{
            return{
                statusCode:404,
                message:'cant find employee'
            }
          

        }
    })
}
//update page
const updateAnEmployee=(id,name,task,technologies)=>{//updated data
    return db.employee.findOne({id}).then((result)=>{//result - details 
        if(result){
            //assiging updated information to the database values
            result.id = id;
            result.name = name;
            result.task = task;
            result.technologies = technologies


            //save updated details into db
            result.save()
            
                return {//send to frontend
                    statusCode:200,
                    message:"Employee data updated successfully"
                }
        }
        else{
                return {
                    statusCode:404,
                    message:'cant find employee'
                }
        }
    })
}
module.exports = {
    getAllEmployees,
    addEmployee,
    deletedata,
    viewdata,
    updateAnEmployee
}