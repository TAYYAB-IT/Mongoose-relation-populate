const student=require('../Schemas/student')
const course=require('../Schemas/course')
module.exports.add_student=(req,res)=>{
    const std=new student()
    std.name=req.params.name
    course.findOne({course_id:req.params.course_id},async(err,record)=>{
        if(err){
            res.send(err)
        }
        else if(!record){
            console.log("No Such course is registered Course Code:"+req.params.course_id)
        }
        else{
        console.log('Here')
            std.courses.push(record._id)
           
        }
        await std.save().then(data=>{res.send(data)}).catch(err=>{res.send(err)})
    })
    
}

module.exports.show=(req,res)=>{
    student.findOne({_id:req.params.id}).populate("courses")
    .exec((err,data)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(data)
        }
    })
}
//Syntex of Populate
//Model.query.populate(path,{match},{options})