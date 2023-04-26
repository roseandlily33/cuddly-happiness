const router = require('express').Router();
const {Post} = require('../../models');
const withAuth = require('../../utils/withAuth');

router.post('/', withAuth, async (req,res) => {
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

router.put('/:id',withAuth, async(req, res) => {
    try{
        const updatedBlog = await Post.update({
            post_title: req.body.post_title,
            post_content: req.body.post_content
          
        },{where: {
            user_id: req.session.user_id,
                     id: req.params.id
    }});

        res.json(updatedBlog);
    } catch(err){
        console.log(err);
        res.status(500).json({message: 'Couldnt update the blog!'})
    }
});

router.delete('/:id', withAuth, async (req, res) => {
   try{
    const deletedBlog = Post.destroy({
        where: {
            id: req.params.id,
            user_id: req.session.user_id
        }
    });
    res.json(deletedBlog);
   } catch(err){
    res.status(500).json({message: 'Not able to delete a blog'})
   }

});


module.exports = router;