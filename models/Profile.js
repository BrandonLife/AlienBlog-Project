// class Profile {
//     constructor(username, password, email) {
//         this.username = username;
//         this.password = password;
//         this.email = email
//     }
// }
const mongoose = require('mongoose');

const Posts = require('./Post')

const profileSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    email: {
        type: String,
        required: true,
    },
    // posts: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Post'
    // }]
})


module.exports = mongoose.model('Profile', profileSchema);