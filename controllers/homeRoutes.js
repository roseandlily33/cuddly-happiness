const router = require('express').Router();
const { User, Post, Comment} = require('../models');
const withAuth = require('../utils/withAuth');

//Get all the posts for homepage: 
router.get('/', async(req, res) => {
    try{
        const postData = await Post.findAll({
            include: [{model: User, attributes: ['username']}]
        });
        const postMap = postData.map(post => post.get({plain:true}));
        res.status(200).render('homepage',
        {postMap});
    } catch(err){
        res.status(500).json({message: 'No homepage available'})
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
        res.status(500).json({message: 'Login page is not available'})
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
            where: {
                id: req.params.id
            }
        });
        const post = postData.map(post => post.get({plain: true}));
        console.log('POST'+ post);
        res.render('dashboard', {
            post
        });

    } catch(err){
        res.status(500).json({message: 'Dashboard is not found'});
    }
})


//Get one post:
router.get('dashboard/:id', async (req, res) => {
    try{
        const blogPost = await Post.findByPK(req.params.id);
        console.log(blogPost);
        res.render('onepost',
        blogPost);

    } catch (err){
        res.status(500).json({message: 'No Blog Post Found'});

    }
});



module.exports = router;