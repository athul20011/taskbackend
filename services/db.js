//connection code of node and mongodb
//1 import mongoose
const mongoose = require('mongoose')

//connection string
mongoose.connect('mongodb://127.0.0.1:27017/tasks');


//model creation
const employee = mongoose.model('Task',{
    id:String,
    name:String,
    task:String,
    technologies:String
})

module.exports={
    employee
}