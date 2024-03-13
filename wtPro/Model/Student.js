const mongoose = require('mongoose');
const { Schema } = mongoose;
const StudentSchema = new Schema({
    SelectCollege: { type: String, required: true },
    Department:{type:String,required:true},
    year:{ type:String ,required:true},
    username: {
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
    password: { type: String, minLength: 6, required: true },
    CollegeCode:{type:String,required:true
    }
})
exports.Model = mongoose.model('students', StudentSchema);