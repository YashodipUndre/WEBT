
const model= require("../Model/PhotoGraphers")
const PhoModel=model.Model; 
 exports.getPhotoGraphers = async(req,res)=>{
    let Query =await PhoModel.find();
    res.json(Query)
}
