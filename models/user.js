const { string, required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type:String,
        required: true,
    },
    //username and password are automatically defined by the passport-local-mongoose
})

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);