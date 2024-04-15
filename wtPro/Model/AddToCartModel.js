const mongoose = require('mongoose');
const { Schema } = mongoose;

const AddTOCartSchema = new Schema({
    username: { type: String, required: true},
    product_id:{type:String,required:true
    },
    type:{type:String,required:true}
})
exports.Model = mongoose.model('AddToCart', AddTOCartSchema);