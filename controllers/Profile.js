const db = require('../config/database')
const Profile = require('../models/Profile')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Secret = require('../config/config').jwtSecret


module.exports = {
    register: {
        get: function (req, res) {
            let loggedIn = req.loggedIn
            res.render('register.hbs', {
                loggedIn
            })
        }, //this gets the form
        post: function (req, res) { // this allows us to send data to the database from the form
            let body = req.body
            //step 1 validation
            if (body.repeatPassword !== body.password) {
                return console.log('Passwords do not match')
            }
            // step 2 check if the username is already used
            Profile.find({
                username: body.username
            }).lean().then(profile => {
                if (profile.length !== 0) {
                    return console.log('Profile already exists')
                }
            })
            //step 3 encrypt the password and create the user
            bcrypt.genSalt(9, (err, salt) => {
                bcrypt.hash(body.password, salt, (err, hash) => {
                    let username = body.username;
                    let email = body.email;
                    let password = hash;

                    new Profile({
                        username,
                        password,
                        email
                    }).save().then((result) => {
                        res.redirect('/profile/login')
                    })
                })
            })
        },
    },
    login: {
        get: function (req, res) {
            let loggedIn = req.loggedIn
            res.render('login.hbs', {
                loggedIn
            })
        },
        post: function (req, res) {
            let body = req.body;
            // console.log(body)
            let username = body.username
            let password = body.password
            //validation
            // find user
            Profile.findOne({
                    username
                }).lean()
                .then((profile) => {
                    console.log(profile)
                    if (profile === null) {
                        return console.log("No profile found")
                    }
                    let _id = profile._id;
                    let hash = profile.password
                    // console.log(hash)
                    // verify the password
                    bcrypt.compare(password, hash, (err, result) => {
                        if (err) {
                            return console.log(err)
                        }

                        // console.log(result); // true
                        if (!result) {
                            return console.log("passwords do not match")
                        }
                        // set up json web token and put it into a cookie
                        const payload = {
                            _id,
                            username,

                        };
                        const options = {
                            expiresIn: '2d'
                        };
                        const token = jwt.sign(payload, Secret, options);
                        console.log(token)
                        res.cookie("Profile", token)
                        res.redirect('/about');
                    });
                })

        }
    },
    logout: {
        get: function (req, res) {
            res.clearCookie("Profile")
            res.redirect('/')
        }
    }


}