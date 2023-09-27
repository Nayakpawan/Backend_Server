const mongoose = require('mongoose')
const Schema = mongoose.Schema;
mongoose.set('strictQuery', false);
const userSchema = new Schema({
    description: String,
    image: String,
    date: String,
    title:String
});

module.exports = mongoose.model('users', userSchema);
