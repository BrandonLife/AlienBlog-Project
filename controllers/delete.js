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
            res.render('deletePost.hbs', context)
        });
    }, //this gets the form
    post: function (req, res) { // this allows us to send data to the database from the form
        let postId = req.params.id;
        Posts.findByIdAndRemove(postId).
        then(result => {
            console.log(result)
            res.redirect(`/blogABCPosts`)
        })


    },

}