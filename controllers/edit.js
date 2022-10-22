const db = require('../config/database')
const Posts = require('../models/Post')


module.exports = {

    get: function (req, res) {
        let postId = req.params.id
        let loggedIn = req.loggedIn
        Posts.findById(postId).lean().then(post => {
            let context = {
                loggedIn,
                ...post
            }
            res.render('editPost.hbs', context)
        });

    }, //this gets the form
    post: function (req, res) { // this allows us to send data to the database from the form
        let postId = req.params.id;
        let body = req.body;
        Posts.findByIdAndUpdate(postId, {
            $set: {
                ...body
            }
        }).then(result => {
            console.log(result)
            res.redirect(`/blogABCPosts`)
        })

    }
}