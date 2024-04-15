const model = require('../Model/AddToCartModel')
const cartModel = model.Model
const md = require('../Model/vanue')
const venueModel = md.Model;
const mod = require('../Model/PhotoGraphers')
const PhotoModel = mod.Model;
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
            let vanue;
            let photo;
            const data = await cartModel.find({username:req.body.username});
            data?.map(async(item)=>{
                if(item.type=='venue'){
                  vanue=await venueModel.find({_id:item.product_id})
                }
                if(item.type=='Photographers'){
                    photo=await PhotoModel.find({_id:item.product_id})
                    
                }
            })
            res.json(vanue)
         }
         catch(error){
          console.log(error);
         }
   
  
}