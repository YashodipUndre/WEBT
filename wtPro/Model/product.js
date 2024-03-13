const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProSchema = new Schema({
    id:{type:Number , min:[0,'Too low']},
    title: {type:String , required:true},
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images:[String]
})
exports.Model = mongoose.model('products',ProSchema);