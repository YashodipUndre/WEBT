const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    CollegeName: { type: String, required: true,unique:true },
    email: {
      type: String,
      unique: true,
      validate: {
        validator: function (v) {
          return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email!`,
      },
      required: true,
    },
    address:{type:String,required:true
    }
})
exports.Model = mongoose.model('colleges', UserSchema);