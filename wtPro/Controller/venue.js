
const model= require("../Model/service")
const venues=model.Model; 
const ejs = require('ejs')
const path = require('path')
 exports.getVenues = async(req,res)=>{
    let Query =await venues.find({type:'venue'});
    res.json(Query)
      
}
exports.getLawnsvanue = async(req,res)=>{
    let Query =await venues.find({venueType:'lawns'});
    res.json(Query)
      
}
exports.getFarmHouseVenues=async(req,res)=>{
    let Query =await venues.find({venueType:'farmhouse'});
    res.json(Query)
      
}
exports.getWeddingResort=async(req,res)=>{
    const newTem = await venues.find({venueType:'weddingresort'});
    res.json(newTem);
}

exports.getLounge = async(req,res)=>{
    const newTem = await venues.find({venueType:'lounge'});
    res.json(newTem);
      
}
exports.getbanquethall = async(req,res)=>{
    const newTem = await venues.find({venueType:'banquet hall'});
    res.json(newTem);
      
}

exports.getProduct = async(req,res)=>{
  
 const product= await Products.findOne({id:req.params.id})
 res.json(product)

   
}

exports.createProduct = async(req,res)=>{
   const product = new Products(req.body);
   const Doc=await product.save()
   res.json(Doc);
  
}




exports.ReplaceProduct = async(req,res)=>{
    const id = req.params.id;
    try{
    const product = await Products.findOneAndReplace({_id:id},req.body,{new:true}) 
    res.json(product)
    }
    catch(err){
        res.json(err);
    }
    
}

exports.updateProduct  = async(req,res)=>{
    const oid = req.params.id;
    try{
    const product = await Products.findOneAndUpdate({id:oid},req.body,{new:true}) 
    res.json(product)
    }
    catch(err){
        res.json(err);
    }
}
exports.delete = async(req,res)=>{
    const oid = req.params.id;
    const product = await Products.findOneAndDelete({id:oid},{new:false})
    res.json(product);
}