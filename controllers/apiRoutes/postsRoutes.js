const router = require('express').Router();
const {User, Post, Comment} = require('../../models');

router.post('/', async (req,res) => {
    try{
        const newPost = await Post.create({
            post_title: req.body.post_title,
            post_content: req.body.post_content,
            user_id: req.session.user_id,
        });
        res.json(newPost);
    } catch(err){
        res.status(500).json({message: 'Cannot add the new blog post'});
    }
});

module.exports = router;