const router = require('express').Router();
const { User, Post, Comment} = require('../models');

//Get all the posts for homepage: - Finished
router.get('/', async(req, res) => {
    try{
        const postData = await Post.findAll({
            include: [{model:Comment}, {model: User}]
        });
        const postMap = postData.map(post => post.get({plain:true}));
        res.status(200).render('homepage',
        {postMap});
    } catch(err){
        res.status(500).json({message: 'No homepage available'})
    }
});
//Get's login page: - Finished
router.get('/login', async (req, res) => {
    try{
        if(req.session.loggedIn){
            res.render('/');
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
//Creates a new user:
router.post('/', async (req, res) => {
    try{
        const dbUser = await User.create({
            username: req.body.username,
            email: req.body.email,
        });
        req.session.save(() => {
            res.status(200).render('/');
            res.session.loggedIn = true;
        });

    } catch(err){
        res.status(500).json({message: 'Could not create a user'});
    }
})


// Post on login page:
router.post('/login', async (req, res) => {
    try{
        const userData = await User.findOne({ where: {
            email: req.body.email
        }});
        if(!userData){
            res.status(400).json({message: 'Not a valid username or password '});
        }
        const validPass = userData.checkPassword(req.body.password);
        if(!validPass){
            res.status(500).json({message: 'Not a valid username or password });
        })}
        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json({message: 'You are now logged in'});
        })

    } catch(err){
        res.status(500).json({message: 'Couldnt login'});
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

router.post('/logout', (req, res) => {
    if(req.session.loggedIn){
        req.session.destroy(() => {
            res.status(204).end();
        }) 
    } else {
        res.status(404).end();
    }
})



module.exports = router;