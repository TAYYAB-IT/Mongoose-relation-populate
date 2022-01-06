const express = require('express')
const router = express.Router();
const student=require('../Controllers/student_controller')
router.post('/student/:name/:course_id',student.add_student)
router.get('/student/:id',student.show)
module.exports=router