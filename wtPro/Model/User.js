const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: { type: String, required: true },
    lastName: String,
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
    mobilenumber:{
      type: String, minLength: 10, required: true 
    },
    username:{
      type: String, minLength: 6, required: true ,unique:true,
    },
    password: { type: String, minLength: 6, required: true },
})
exports.Model = mongoose.model('users', UserSchema);