const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProSchema = new Schema({
    image:[String],
    hotelName: {type:String , required:true},
    rating: String,
    location:String,
    price: String,
    rooms:String,
   
})
exports.Model = mongoose.model('venues',ProSchema);