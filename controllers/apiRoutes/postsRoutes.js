const router = require('express').Router();
const {User, Post, Comment} = require('../../models');

//Creates a new blog:
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
//Put to update the blog
router.put('/:id', async(req, res) => {
    try{
        const updatedBlog = await Post.update({
            post_title: req.body.post_title,
            post_content: req.body.post_content,
            user_id: req.session.user_id,
        });
        res.json(updatedBlog);

    } catch(err){
        res.status(500).json({message: 'Couldnt update the blog!'})
    }
});

router.delete('/:id', async (req, res) => {
   try{
    const deletedBlog = Post.destroy({
        where: {
            id: req.params.id
        }
    });
    res.json(deletedBlog);
   } catch(err){
    res.status(500).json({message: 'Not able to delete a blog'})
   }

})


module.exports = router;