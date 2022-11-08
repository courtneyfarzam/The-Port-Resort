const router = require('express').Router();
const { Portfolio, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const portfolioData = await Portfolio.findAll({
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
        })

        res.status(200).json(portfolioData);

    } catch(err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const portfolioData = await findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: Portfolio,
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
                    ]
                }
            ],
            include: [
                {
                    model: User,
                    attributes: ['name']
                }
            ]
        })

        if (!portfolioData) {
            res.status(400).json({message: 'No portfolio found'});
            return;
        }

        res.status(200).json(portfolioData)
    } catch(err) {
        res.status(500).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    try {
        const newPortfolio = await Portfolio.create({
            ...req.body,
            user_id: req.session.user_id
        }) 
        // ******DOES THIS WORK?******** //

        res.status(200).json(newPortfolio);
    } catch(err) {
        res.status(500).json(err);
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const updatePortfolio = await Portfolio.update(
            {
                ...req.body,
                user_id: req.session.user_id
            },
            {
                where: {
                    id: req.params.id,
                }
            }
        );
        // ******DOES THIS WORK?******** //

        if (!updatePortfolio) {
            res.status(400).json({message: 'No portfolio found'});
            return;
        }

        res.status(200).json(newPortfolio);

    } catch(err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const portfolioData = await Portfolio.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            }
        })

        if(!portfolioData) {
            res.status(400).json({message: 'No portfolio found'});
            return;
        }

        res.status(200).json(portfolioData);

    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;