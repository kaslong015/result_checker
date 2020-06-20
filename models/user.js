var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username:String,
    hash:String,
    salt:String,
    role:{
        type:Boolean,
        default:true
    }

});

module.exports = mongoose.model('User',userSchema);