const venuesMd = require('../Model/service');
const vnModel = venuesMd.Model;
exports.getSearchv=async(req,res)=>{
      const AllData =await vnModel.find();
    //   const at = [{venue:"Yash"},{venue:"Yahsodip"}]
    //   const up = [...AllData,...at];
    //   res.json(up);
      res.json(AllData);
}
