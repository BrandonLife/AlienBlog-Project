module.exports = {
    development: {
        port: process.env.Port || 3000
    },
    dbURL: 'mongodb://localhost:27017/AlienBlog',
    production: {},
    jwtSecret: "password"
}