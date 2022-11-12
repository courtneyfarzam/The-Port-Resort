const router = require('express').Router();
const { User, Portfolio } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes: {exclude: ['password']}
        });

        res.status(200).json(userData);

    } catch(err) {
        res.status(500).json({message: 'check line 18 ur'});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                id: req.params.id
            },
            attributes: {
                exclude: ['password']
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
                },
            ]
        })

        if(!userData) {
            res.status(404).json({message: 'No user found'});
            return;
        }

        res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post('/', async (req, res) => {
    try {
        const userData = await User.create({
            name: req.body.fullName,
            github: req.body.github,
            email: req.body.email,
            password: req.body.password
        });

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.full_name = userData.name;
            req.session.github = userData.github;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch(err) {
        res.status(500).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                email: req.body.email
            }
        });

        if (!userData) {
            res.status(400).json({message: 'Incorrect email. Please try again'});
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password)

        if (!validPassword) {
            res.status(400).json({message: 'Incorrect password. Please try again'});
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json({user: userData, message: 'You have successfully logged in!'});
        });

    } catch(err) {
        res.status(500).json({message: 'check line 114 ur'});
    }
});

router.post('/logout', async (req, res) => {
    
    if (req.session.logged_in) {
        req.session.destroy(()=> {
            res.status(200).end();
        })
    } else {
        res.status(400).end();
    }
});

module.exports = router;