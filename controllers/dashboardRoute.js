const router = require('express').Router();
const { Portfolio, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const portfolioData = await Portfolio.findAll ({
            where: {user_id: req.session.user_id},
            attributes: [
                'id', 
                'full_name', 
                'job_title', 
                'about',
                'phone',
                'country',
                'city',
                'linkedin',
                'github',
                'school',
                'course',
                'graduation_date',
                'role',
                'company',
                'location',
                'job_starting',
                'job_ending',
                'job_description',
                'project_name',
                'repository',
                'project_description'
            ],

            include: [
                {
                    model: User,
                    attributes: ['name']
                }
            ]
        });

         const portfolio = portfolioData.map(post => post.get({ plain: true }));
    } catch(err) {
        res.status(500).json(err);
    }
});

router.get('/edit/:id', withAuth, async (req, res) => {
    try {

    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;

