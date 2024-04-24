
const model= require("../Model/service")
const Model=model.Model; 
 exports.getFood = async(req,res)=>{
    let Query =await Model.find({type:'Food'});
    res.json(Query)
}
