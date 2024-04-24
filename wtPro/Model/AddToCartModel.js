const mongoose = require('mongoose');
const { Schema } = mongoose;

const AddTOCartSchema = new Schema({
    username: { type: String, required: true},
    product_code:{type:String,required:true
    },
    type:{type:String,required:true}
})
exports.Model = mongoose.model('addtocarts', AddTOCartSchema);