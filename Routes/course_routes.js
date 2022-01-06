const express = require('express')
const router = express.Router();
const course=require('../Controllers/course_controller')
router.post('/course/:title',course.add_Course)
module.exports=router