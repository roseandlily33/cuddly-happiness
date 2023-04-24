const router = require('express').Router();
const {User, Post, Comment} = require('../../models');



// Post to comments:
router.post('/', async(req, res) => {
    try{
        const postData = await Comment.create({
            post_id: req.body.post_id,
            comment_content: req.body.comment_text,
            comment_date: req.body.comment_date,
            user_id: req.body.user,
        });
        req.session.save(() => {
            req.session.loggedIn = true,
            res.status(200).json(postData);
        })
    } catch(err){
        res.status(500).json({message: 'No comments found'});
    }
});




module.exports = router;