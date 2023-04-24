const router = require('express').Router();
const {User} = require('../../models');

//Creates a new user: - Finished
router.post('/', async (req, res) => {
    try{
        const dbUser = await User.create({
            username: req.body.username,
            password: req.body.password,
        });
        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json(dbUser);
        });
    } catch(err){
        res.status(500).json({message: 'Could not create a user'});
    }
});

// Post on login page:
router.post('/login', async (req, res) => {
    try{
        const userData = await User.findOne({ where: {
            username: req.body.username
        }});
        if(!userData){
            res.status(400).json({message: 'Not a valid username or password '});
            return;
        }
        const validPass = userData.checkPassword(req.body.password);
        if(!validPass){
            res.status(500).json({message: 'Not a valid username or password' });
            return;
        }
        req.session.save(() => {
           req.session.loggedIn = true;
           res.status(200).json({message: 'Logged IN!!'})
        });
    } catch(err){
        res.status(500).json({message: 'Couldnt login'});
    }
});

// Logout - Finished
router.post('/logout', (req, res) => {
    if(req.session.loggedIn){
        req.session.destroy(() => {
            res.status(204).end();
        }) 
    } else {
        res.status(404).end();
    }
});
//Delete a blog post:
router.delete('/api/dashboard/:id', async(req, res) => {
    try{
        const delPost = await Post.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(delPost);
    } catch(err){
        res.status(500).json({message: 'Cannot delete this post'});
    }
});

module.exports = router;