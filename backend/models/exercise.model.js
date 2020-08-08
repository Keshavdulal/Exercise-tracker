const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//making a exercise schema with just four  fields and then validating it
const exerciseSchema = new Schema({
    username:{type:String, required:true},
    description:{type:String, required: true},
    duration:{type:Number, required: true},
    date:{type:Date, required: true},
},{
    timestamps:true,    // keep track of creation & modification
});

// create User model using userSchema & then export
const Exercise = mongoose.model('Exercise',exerciseSchema);
module.exports = Exercise;