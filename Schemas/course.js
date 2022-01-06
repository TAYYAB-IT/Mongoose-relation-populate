const mongoose = require('mongoose')
const auto_increment=require('mongoose-auto-increment')
auto_increment.initialize(mongoose.connection)
const Schema=mongoose.Schema
var course=new Schema({
    title:{type :String,required:true},
    course_id:Number
})
course.plugin(auto_increment.plugin,{model:'Course',field:'course_id',startAt:101,incrementBy:1})
module.exports = mongoose.model('Course',course)