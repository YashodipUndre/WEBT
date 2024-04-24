const md = require('../Model/WeddingReg')
const WDModel = md.Model;
exports.setWeddingReg=async(req,res)=>{
    try{
    const data= new WDModel(req.body);
    const finalData=await data.save();
    res.json(finalData);
    }
    catch(error){
        res.json(req.body);
    }
}
exports.checkWeddingemail=async (req,res)=>{
        let data = null;
        data = await WDModel.findOne({email:req.body.email});
        res.json(data);
}