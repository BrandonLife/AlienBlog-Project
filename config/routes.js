const controllers = require('../controllers/index')

module.exports = (app) => {
    app.get('/profile/login', controllers.Profile.login.get) // login page
    app.post('/profile/login', controllers.Profile.login.post) // log users in
    app.get('/profile/register', controllers.Profile.register.get) // get the register page
    app.post('/profile/register', controllers.Profile.register.post) // register users
    app.get('/profile/logout', controllers.Profile.logout.get) // logout user
    app.get('/', controllers.home) // home page
    app.get('/blogABCCreatePosts', controllers.createPost.posts.get) // to get the form
    app.post('/blogABCCreatePosts', controllers.createPost.posts.post) // create a new post
    app.get('/edit/Post/:id', controllers.edit.get) // to get edit posts page
    app.post('/edit/Post/:id', controllers.edit.post) // to edit post page
    app.get('/delete/Post/:id', controllers.delete.get) // to get delete post page
    app.post('/delete/Post/:id', controllers.delete.post) // to delete post
    app.get('/blogABCPosts', controllers.SeePost.posts.get) // get all posts
    app.post('/blogABCPosts/:id', controllers.SeePost.posts.post) // add to that particular post
    app.get('/about', controllers.About)
    app.get('/home', controllers.home)
    app.get('*', controllers.Error) //404 page
}