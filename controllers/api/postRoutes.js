const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            attributes: ['id', 'name', 'job_title', 'about', 'github'],
            include: [
                {
                    model: User,
                    attributes: ['name', 'github']
                },
            ]
        })
        res.status(200).json(postData)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findOne({
            where: {
                id: req.params.id
            },
            attributes: ['id', 'name', 'job_title', 'about', 'github'],
            include: [
                {
                    model: User,
                    attributes: ['name', 'github']
                },
            ]
        });

        if (!postData) {
            res.status(404).json({message: 'No post found.'});
            return;
        }

        res.status(200).json(postData)

    } catch (err) {
        res.status(500).json(err)
    }
});

router.post('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.create({
            name: req.body.name,
            job_title: req.body.job_title,
            about: req.body.about,
            github: req.body.github,
            user_id: req.session.user_id
        });
        
        res.status(200).json(postData)
    
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.update(
            {
                name: req.body.name,
                job_title: req.body.job_title,
                about: req.body.about,
                github: req.body.github,
            },
            {
                where: {
                    id: req.params.id
                }
            }
        );

        if (!postData) {
            res.status(404).json({message: 'No post with that id found'});
            return;
        }

        res.status(200).json(postData);

    } catch (err) {
        res.status(500).json(err)
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
            }
        });

        if (!postData) {
            res.status(404).json({message: 'No post found with this id'});
            return;
        }

        res.status(200).json(postData);

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;