const router = require('express').Router();
const {User, Post, Comment} = require('../../models');

// Post to comments:
router.post('/', async(req, res) => {
    try{
      //  const newComment = await
       Comment.create({
            comment_content: req.body.comment_content,
            user_id: req.session.user_id,
            post_id: req.body.post_id,
            
        })
     // res.send(newComment);
    // res.json(newComment);
    } catch(err){
        res.status(500).json({message: 'No comments found'});
    }
});




module.exports = router;