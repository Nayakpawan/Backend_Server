const mongoose = require('mongoose')
const Schema = mongoose.Schema;
mongoose.set('strictQuery', false);
const userSchema = new Schema({
   name:String,
   email:String,
   phone:Number,
   msg:String
});

module.exports = mongoose.model('ContectUser', userSchema);
