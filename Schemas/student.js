const mongoose = require('mongoose')
const auto_increment=require('mongoose-auto-increment')
auto_increment.initialize(mongoose.connection)
const Schema=mongoose.Schema
var student=new Schema({
    name:{type :String,required:true},
    courses:
    [
        {type:Schema.Types.ObjectId,
        ref:"Course"
        }
    ]
})
student.plugin(auto_increment.plugin,{model:'Student',field:'_id',startAt:1,incrementBy:1})
module.exports = mongoose.model('Student',student)