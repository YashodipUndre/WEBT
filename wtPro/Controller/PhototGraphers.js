
const model= require("../Model/service")
const Model=model.Model; 
 exports.getPhotoGraphers = async(req,res)=>{
    let Query =await Model.find({type:'Photographers'});
    res.json(Query)
}
