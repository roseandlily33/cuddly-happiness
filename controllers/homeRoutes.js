const router = require('express').Router();
const { User, Post, Comment} = require('../models');
const withAuth = require('../utils/withAuth');

//Get all the posts for homepage: 
// Still need to get the user who created the post
router.get('/', async(req, res) => {
    try{
        const postData = await Post.findAll({
            include: [{model: User, attributes: ['username']}]
        });
        const posts = postData.map(post => post.get({plain:true}));
        res.status(200).render('homepage',
        {posts,
        loggedIn: req.session.loggedIn});
    } catch(err){
        res.status(500).json({message: 'No homepage available'});
    }
});
//Get's login page: 
router.get('/login', async (req, res) => {
    try{
        if(req.session.loggedIn){
            res.render('homepage');
        }
        res.render('login');
    } catch(err){
        res.status(500).json({message: 'Login page is not available'});
    }
});
//Sign up: - Finished
router.get('/signup', async (req, res) => {
    try{
        res.render('signup');
    } catch(err){
        res.status(500).json({message: 'Cant sign up'});
    }
});

// Needs withAuth
router.get('/dashboard', async (req, res) => {
    try{
        const postData = await Post.findAll({
            include: ({model: User})
        });
        const post = postData.map(post => post.get({plain: true}));
        res.render('dashboard', {
            post,
            loggedIn: req.session.loggedIn,
        });

    } catch(err){
        res.status(500).json({message: 'Dashboard is not found'});
    }
});



router.get('/onepost/:id', async(req, res) => {
    try{
        const postData = await Post.findByPk(req.params.id, {
            include: [{model: User}, {model: Comment}]
               // include: [User, { model: Comment, include: [User]}],
            });
            if(!postData){
                res.status(404).json('Cannot find the post');
            };
            const post = postData.get({plain: true});
            res.status(200).render('onepost', 
               { post,
                loggedIn: req.session.loggedIn}
            );
    } catch(err){
        res.status(500).json({message: 'No comments found'});
    }
});





module.exports = router;