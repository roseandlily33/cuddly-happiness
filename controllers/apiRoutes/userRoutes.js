const router = require('express').Router();
const {User} = require('../../models');
//Create a user
router.post('/', async(req, res) => {
    try{
    const user = await User.create({
        username: req.body.username,
        password: req.body.password
    });
    console.log(user);
    req.session.save(() => {
        req.session.loggedIn = true;
        res.status(200).json(user);
       
    })
} catch(err){
    res.status(500).json(err);
}});


module.exports = router;