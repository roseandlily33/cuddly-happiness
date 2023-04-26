const router = require('express').Router();
const { User, Post, Comment} = require('../models');
const withAuth = require('../utils/withAuth');

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

router.get('/login', (req, res) => {
    try{
        if(req.session.loggedIn){
            res.render('homepage');
            return;
        }
        res.render('login');
    } catch(err){
        res.status(500).json({message: 'Login page is not available'});
    }
});

router.get('/signup', async (req, res) => {
    try{
        res.render('signup');
    } catch(err){
        res.status(500).json({message: 'Cant sign up'});
    }
});

router.get('/dashboard', async (req, res) => {
    try{
  
        const postData = await Post.findAll({
            where: {
               id: req.session.user_id
            }, 
            include: [{model: User}]
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
            });
            if(!postData){
                res.status(404).json('Cannot find the post');
            };
            const post = postData.get({plain: true});
            console.log(post);
            res.status(200).render('onepost', 
               { post,
                loggedIn: req.session.loggedIn}
            );
    } catch(err){
        res.status(500).json({message: 'No comments found'});
    }
});

router.get('/newBlog', withAuth, async(req, res) => {
    try{
        res.render('newBlog');
    } catch(err){
        res.status(500).json({message: 'Cannot get new blog page'});
    }
});

router.get('/edit/:id', async(req, res) => {
    try{
        const postData = await Post.findByPk(req.params.id, {
            include: [{model: Comment}, {model: User}]
        });
        const post = postData.get({plain: true});
        res.render('editpage', {post,
        loggedIn: req.session.loggedIn});
    } catch(err){
        res.status(500).json({message: 'Cannot get the edit page'})
    }
});


module.exports = router;