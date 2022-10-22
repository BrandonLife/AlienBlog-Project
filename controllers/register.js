const db = require('../config/database')
const Profile = require('../models/Profile')


module.exports = {
    users: {
        get: function (req, res) {
            res.render('register.hbs')
        }, //this gets the form
        post: function (req, res) { // this allows us to send data to the database from the form
            let body = req.body

            db.then(() => {
                new Profile(body).save().then((result) => {

                    res.redirect('/profile/login')
                })
            })


        },
    },


}