const router = require('express').Router();
const { User, Post } = require('../models');

//Get all the posts for homepage:
router.get('/', async(req, res) => {
    try{
        const postData = await Post.findAll();
        const postMap = postData.map(post => post.get({plain:true}));
        res.render('homepage',
        {postMap});
    } catch(err){
        res.status(500).json({message: 'No homepage available'})
    }
});


//Get one post:
router.get('/:id', async (req, res) => {
    try{
        const blogPost = await Post.findByPK(req.params.id);
        console.log(blogPost);
        res.render('onepost',
        blogPost);

    } catch (err){
        res.status(500).json({message: 'No Blog Post Found'});

    }
});

//Get's login page:
router.get('/login', async (req, res) => {
    try{
        res.render('login');
    } catch(err){
        res.status(500).json({message: 'Login page is not available'})
    }
});
// Post on login page:
router.post('/login', async (req, res) => {
    try{
        const userData = await User.findOne({ where: {
            email: req.body.email
        }});
        if(!userData){
            res.status(400).json({message: 'No user found'});
        }
        const validPass = await userData.checkPassword(req.body.password);
        if(!validPass){
            res.status(500).json({message: 'No user found'});
        };
        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json({message: 'You are now logged in'});
        })

    } catch(err){
        res.status(500).json({message: 'Couldnt login'});
    }
})

//Sign up:
router.get('/signup', async (req, res) => {
    try{
        res.render('signup');
    } catch(err){
        res.status(500).json({message: 'Cant sign up'});
    }
})





module.exports = router;