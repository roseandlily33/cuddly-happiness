const router = require('express').Router();
const {User} = require('../../models');

//Creates a new user:
router.post('/', async (req, res) => {
    try{
        const dbUser = await User.create({
            username: req.body.username,
            email: req.body.email,
        });
        req.session.save(() => {
            res.session.loggedIn = true;
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
            email: req.body.email
        }});
        if(!userData){
            res.status(400).json({message: 'Not a valid username or password '});
        }
        const validPass = userData.checkPassword(req.body.password);
        if(!validPass){
            res.status(500).json({message: 'Not a valid username or password' });
        }
        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json({message: 'You are now logged in'});
        })

    } catch(err){
        res.status(500).json({message: 'Couldnt login'});
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
});


module.exports = router;