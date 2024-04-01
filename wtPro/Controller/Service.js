
const model= require("../Model/vanue")
const venues=model.Model; 
const ejs = require('ejs')
const path = require('path')
 exports.getVenues = async(req,res)=>{
    let Query =await venues.find();
    res.json(Query)
      
}
exports.getAdd=async(req,res)=>{
    const newTem = await ejs.renderFile(path.resolve(__dirname,"../form.ejs"))
    res.send(newTem);
}

exports.getProductsSsr = async(req,res)=>{
    Products.find()
    .then(async function (models) {
      const newTem=await ejs.renderFile(path.resolve(__dirname,"../index.ejs"),{Products:models})
      res.send(newTem);
    })
    .catch(function (err) {
      console.log(err);
    });
      
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