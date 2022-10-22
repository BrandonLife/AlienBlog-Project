// class User {
//     constructor(id = 0, name, imageURL, comments) {
//         this.id = id;
//         this.name = name;
//         this.imageURL = imageURL;
//         this.comments = comments
//     }
// }
const mongoose = require('mongoose');
const Profile = require('./Profile')
const PostsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String,
        required: true,
        validate: validImage
    },
    comments: {
        type: String,
        required: true
    },
    creatorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile'
    },

});

function validImage(val) {
    if (val.startsWith("http://") || val.startsWith("https://")) {
        return true
    } else {
        return false
    }
}
module.exports = mongoose.model('Posts', PostsSchema);