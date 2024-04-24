const mongoose = require('mongoose');
const { Schema } = mongoose;

const WeddingReg = new Schema({
    WedName: { type: String, required: true },
    WedDate: {
      type: String,
      required: true,
    },
    City:{
      type: String, required: true 
    },
    type:{
      type: String
    },
    email:{
        type:String,required:true,unique:true
    }
})
exports.Model = mongoose.model('weddingreg', WeddingReg);