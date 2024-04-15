const mongoose = require('mongoose');
const {Schema} = mongoose;

const PhoSchema = new Schema({
    image:[String],
    hotelName: {type:String , required:true},
    rating: String,
    location:String,
    price: String,
    rooms:String,
   
})
exports.Model = mongoose.model('photographers',PhoSchema);