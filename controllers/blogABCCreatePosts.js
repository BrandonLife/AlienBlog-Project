// const fs = require('fs')
// const uniqid = require('uniqid')
// const path = require('path')
const db = require('../config/database')
const Posts = require('../models/Post')


module.exports = {
    posts: {
        get: function (req, res) {
            let loggedIn = req.loggedIn
            res.render('blogABCCreatePosts.hbs', {
                loggedIn
            });
        }, //this gets the form
        post: function (req, res) { // this allows us to send data to the database from the form
            let body = req.body
            let profile = req.Profile;
            let newPost = {
                ...req.body,
                creatorId: profile.id
            }
            // console.log(body, profile)
            new Posts(newPost).save().then((result) => {
                console.log(result)
                res.redirect('/')
            })



        },
    },



}

// let newPost = new Post(
//     uniqid(),
//     body.name,
//     body.imageURL,
//     body.comments

// );
// console.log(newPost)
// // let dbPath = path.normalize(path.join(__dirname, "../config/database.json"))
// fs.readFile(dbPath, "utf8", (err, data) => {
//     let allUSers = JSON.parse(data);
//     allUSers.push(newPost);
//     console.log(allUSers);
//     let json = JSON.stringify(allUSers);
//     fs.writeFile(dbPath, json, () => {
//         console.log("update successful");
//         res.redirect('/');
//     });
// });