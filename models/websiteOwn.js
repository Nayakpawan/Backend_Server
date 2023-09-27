const mongoose = require('mongoose')
const Schema = mongoose.Schema;
mongoose.set('strictQuery', false);
const userSchema = new Schema({
   name:String,
   phone:Number
});

module.exports = mongoose.model('WebsiteOwn', userSchema);
