const router = require('express').Router();
const { User, Post } = require('../models');

//Get all the posts:
router.get('/', (req, res) => {
    try{
        res.render('homepage')
    } catch(err){
        res.status(500).json({message: 'No homepage available'})
    }
})

router.get('/', async (req, res) => {
    try{
        const blogPosts = await Post.findAll();
        console.log(blogPosts);

    } catch(err){
        res.status(500).json({message: 'No Blog Posts Found'});
    }
})
//Get one port:
router.get('/:id', async (req, res) => {
    try{
        const blogPost = await Post.findByPK(req.params.id);
        console.log(blogPost);

    } catch (err){
        res.status(500).json({message: 'No Blog Post Found'})

    }
})
