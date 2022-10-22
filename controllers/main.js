// const fs = require('fs')
// const path = require('path')
// const db = require('../config/database')
// const Post = require('../models/Post')

// module.exports = function (req, res) {
//     Post.find({}).lean().then((allPosts) => {
//         console.log(allPosts)
//         let context = {
//             posts: [...allPosts],
//         }
//         res.render("blogABCPosts.hbs", context)
//     })
// let allPosts = [{
//     id: 0,
//     name: 'Brandon Jenkins',
//     imageURL: "https://media.npr.org/assets/img/2010/12/07/alien-9c61f4a13fecf3a041d86c38881d93638b320d1c-s1100-c50.jpg",
//     comments: "Hi welcome to Earth"


// }]




// let context = {
//     posts: allPosts
// }

// }

// // let dbPath = path.normalize(path.join(__dirname, "../config/database.json"))
// fs.readFile(dbPath, "utf-8", (err, data) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     let allUsers = JSON.parse(data)
//     let context = {
//         allUsers
//     }
//     res.render('blogABCPosts.hbs', context)
// })