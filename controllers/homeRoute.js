const router = require('express').Router();
const { User, Portfolio } = require('../models');


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
        });

        const portfolio = portfolioData.map(portfolio => portfolio.get({ plain: true }))

        res.render('homepage', {
            portfolio,
            logged_in: req.session.logged_in
        })
    } catch(err) {
        res.status(500).json({message: 'check line 43 hr'});
    }
});

//we need to add in render for login page :)
router.get('/login', async (req, res) => {
    if(req.session.logged_in) {
        res.redirect('/')
        return;
    }
    res.render('login')
});

//connection should work after page
router.get('/signup', async (req, res) => {
    if(req.session.logged_in) {
        res.redirect('/')
        return;
    }    
    res.render('signup')
});
//connection works needs to have page for render
router.get('/portfolio/:id', async (req, res) => {
    try {
        const singlePort = await Portfolio.findOne({
            where: {
                id: req.params.id
            },
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
            include: {
                model: User,
                attributes: [
                    'name',
                    'email'
                ]
            }
        });

        if(!singlePort) {
            res.status(404).json({message: 'No portfolio found'})
            return;
        }
        const port = singlePort.get({plain: true});

        res.render('single-post', {
            port,
            logged_in: req.session.logged_in
        })
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;