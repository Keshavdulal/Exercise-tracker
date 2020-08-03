const mongoose = require('mongoose');
const Schema = mongoose.schema;

//making a user's schema with just one field 'username' and then validating it
const userSchema = new Schema({
    username:{
        type: String,   // validation
        required: true,
        unique: true,
        trim: true,
        minlength: true,
    },
},{
    timestampe:true,    // keep track of creation & modification
});

// create User model using userSchema & then export
const User = mongoose.model('User', userSchema);

module.exports = User;

