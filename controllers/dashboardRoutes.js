const router = require('express').Router();
const sequelize= require('../config/connection');
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: ['id', 'name', 'job_title', 'about', 'github'],
            include: [
                {
                    model: User,
                    attributes: ['name', 'github']
                }
            ]
        });

        const posts = postData.map(post => post.get({ plain: true }));

        res.render('dashboard', {
            posts,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        const updatedPost = await Post.findOne({
            where: {
                id: req.params.id
            },
            attributes: ['id', 'name', 'job_title', 'about', 'github'],
            include: [
                {
                    model: User,
                    attributes: ['name', 'github']
                }
            ]
        });

        if (!updatedPost) {
            res.status(404).json({message: "No post found!"});
            return;
        }

        const post = updatedPost.get({ plain: true });

        res.render('edit-post', {
            post,
            logged_in: req.session.logged_in
        })
    
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/create', withAuth, async (req, res) => {
    try {
        const createPost = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: ['name', 'job_title', 'about', 'github'],
            include: [
                {
                    model: User,
                    attributes: ['name', 'github']
                }
            ]
        })

        const newPost = createPost.map(post => post.get({ plain: true }));

        res.render('create-post', {
            newPost,
            logged_in: req.session.logged_in
        })

    } catch (err) {
        res.status(500).json(err)
    }
});




module.exports = router;