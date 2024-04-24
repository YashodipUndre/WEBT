
const model= require("../Model/service")
const Model=model.Model; 
 exports.getDecoration = async(req,res)=>{
    let Query =await Model.find({type:'Decoration'});
    res.json(Query)
}
