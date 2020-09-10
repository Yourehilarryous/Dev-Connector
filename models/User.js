const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        requried: true,
        unique: true
    },
    avatar: {
        type: String
    }, 
    date: {
        type: Date,
        default: Date.now
    }

})

const User = mongoose.model('User', UserSchema)

module.exports = User