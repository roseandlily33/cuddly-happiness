const router = require('express').Router();
const {User, Post, Comment} = require('../../models');

// Post to comments:
router.post('/', async(req, res) => {
    try{
       if(req.session.loggedIn){
        Comment.create({
            post_id: req.body.post_id,
            comment_content: req.body.comment_content,
            comment_date: req.body.date,
            user_id: req.session.userData.id,
        })
       }
        //res.render('/');
    } catch(err){
        res.status(500).json({message: 'No comments found'});
    }
});




module.exports = router;