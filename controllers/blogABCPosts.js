const db = require('../config/database')
const Post = require('../models/Post')

module.exports = {

    posts: {
        get: function (req, res) {
            console.log(req.loggedIn, req.Profile)
            Post.find({}).lean().then((allPosts) => {
                let context = {
                    posts: allPosts,
                    loggedIn: req.loggedIn
                }
                res.render("blogABCPosts.hbs", context)

            })
        }, //this will load the posts onto the page
        post: function (req, res) { // this allows us to send data to the database from the form
            let body = req.body
            db.then(() => {
                new Posts(body).save().then((result) => {

                    res.redirect('/')
                })
            })


        },
    },

}

// get: function (req, res) {
//     res.render('blogABCPosts.hbs')
// }, //this will get the current post  that the user has just created and build the html for it based on the conditions
// post: function (req, res) { // this will allow users to post to a specific post
//     console.log(req)
//     let body = req.body
//     let newUser = new User(
//         uniqid(),
//         body.name,
//         body.imageURL,
//         body.comments

//     );
//     console.log(newUser)
//     let dbPath = path.normalize(path.join(__dirname, "../config/database.json"))
//     fs.readFile(dbPath, "utf8", (err, data) => {
//         let allUSers = JSON.parse(data);
//         allUSers.push(newUser);
//         console.log(allUSers);
//         let json = JSON.stringify(allUSers);
//         fs.writeFile(dbPath, json, () => {
//             console.log("update successful");
//             res.redirect('/');
//         });
//     });
// },