
const model= require("../Model/service")
const Model=model.Model; 
 exports.getClothing= async(req,res)=>{
    let Query =await Model.find({type:'Clothing'});
    res.json(Query)
}
