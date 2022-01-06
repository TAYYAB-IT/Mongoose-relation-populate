const express = require('express')
const mongoose = require('mongoose')
const monogo=require('./DB_connection')
monogo('mongodb+srv://tybtest90:testing1122@cluster0.hqfbo.mongodb.net/test');
const app=express()
const student=require('./Routes/student_routes')
const course=require('./Routes/course_routes')
app.use('/',student)
app.use('/',course)
app.listen(3000,()=>{
    console.log("Server is Active.")
})

