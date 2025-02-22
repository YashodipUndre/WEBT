
const {Model}= require("../Model/service")
 exports.getPhotoGraphers = async(req,res)=>{
    let Query =await Model.find({type:'Photographers'});
    res.json(Query)
}
