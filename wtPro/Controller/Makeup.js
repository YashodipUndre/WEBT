
const model= require("../Model/service")
const Model=model.Model; 
 exports.getMakeup = async(req,res)=>{
    let Query =await Model.find({type:'Makeup'});
    res.json(Query)
}
