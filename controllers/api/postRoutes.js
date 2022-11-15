const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            attributes: [                
                'id', 
                'name', 
                'job_title', 
                'about',
                'phone', 
                'email',
                'github', 
                'linkedin',
                'role', 
                'company',
                'job_starting',
                'job_ending',
                'job_desc',  
                'school_name', 
                'graduation_date', 
                'degree', 
                'project1_name', 
                'project1_desc', 
                'repository1',
                'project2_name', 
                'project2_desc', 
                'repository2',
                'project3_name', 
                'project3_desc', 
                'repository3',
            ],
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
            attributes: [
                'id', 
                'name', 
                'job_title', 
                'about',
                'phone', 
                'email',
                'github', 
                'linkedin',
                'role', 
                'company',
                'job_starting',
                'job_ending',
                'job_desc',  
                'school_name', 
                'graduation_date', 
                'degree', 
                'project1_name', 
                'project1_desc', 
                'repository1',
                'project2_name', 
                'project2_desc', 
                'repository2',
                'project3_name', 
                'project3_desc', 
                'repository3',
            ],
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
            ...req.body,
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
            // name: req.body.name,
            // job_title: req.body.job_title,
            // about: req.body.about,
            // project_name: req.body.project_name,
            // project_desc: req.body.project_desc,
            // school_name: req.body.school_name,
            // graduation: req.body.graduation,
            // degree: req.body.degree,
            // workExp: req.body.workExp,
            // emoDate: req.body.empDate,
            // jobDesc: req.body.jobDesc,
            // phone: req.body.phone,
            // email: req.body.email,
            // github: req.body.github,
            ...req.body
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