const model = require('../Model/AddToCartModel')
const cartModel = model.Model
const md = require('../Model/service')
const venueModel = md.Model;
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
    let arr;
        try{
            let photo;
            const data = await cartModel.find({username:req.body.username}).select('product_code')
            const megaData = data?.filter(item=>{
                return(
                  item.product_code
                )
            })
            res.json(megaData);
          }
          catch{

          }
            
   
  
}