const course=require('../Schemas/course')
module.exports.add_Course=(req, res)=>{
    co=new course({title:req.params.title})
    co.save().then(data=>{
        res.send(data)
    }).catch(err=>{
        res.send(err)
    })
}