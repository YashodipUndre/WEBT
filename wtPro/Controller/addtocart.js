const model = require('../Model/AddToCartModel')
const cartModel = model.Model
const md = require('../Model/service')
const venueModel = md.Model;
const { MongoClient, ObjectId } = require('mongodb');
exports.addItems = async(req,res)=>{
    try{
        const data = new cartModel(req.body);
        const newData=await data.save();
        res.sendStatus(200);
    }
    catch(error){
     console.log(error);
    }
  
   
}

exports.getItems=async(req,res)=>{
        try{
            const data = await cartModel.find({username:req.body.username}).select('product_code')
            const megaData = data?.map(item=>{
                return(
                  item.product_code
                )
            })
          const ans = await venueModel.find({ _id: { $in: megaData } });
          res.json(ans);
          }
          catch{

          }
            
   
  
}
exports.deleteItem=async(req,res)=>{
  try{
    const newData=await cartModel.deleteOne({product_code:new ObjectId(req.params.id)});
    console.log(newData)
}
catch(error){
 console.log(error);
}
}