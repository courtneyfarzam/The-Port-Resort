const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const nodemailer = require("nodemailer");

router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes: { exclude: ['password'] }
        });
        res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err)
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
                    model: Post,
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
            name: req.body.name,
            github: req.body.github,
            email: req.body.email,
            password: req.body.password
        });
        
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.name = userData.name;
            req.session.github = userData.github;
            req.session.logged_in = true;

            const transporter = nodemailer.createTransport({
                service: "Gmail",
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASSWORD,
                },
                });

                let mailOptions = {
                from: process.env.EMAIL,
                to: userData.email,
                subject: "Welcome to The Port Resort",
                text: "Welcome to port resort your one stop portfolio creator",
                };

                transporter.sendMail(mailOptions, function (err, data) {
                if (err) {
                    console.log("Error occured", err);
                } else {
                    console.log("Email Sent", data);
                }
                });



            res.status(200).json(userData)
        })
    } catch (err) {
        res.status(400).json(err)
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                email: req.body.email
            }
        })

        if(!userData) {
            res.status(400).json({message:'Incorrect email. Please try again.'});
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if(!validPassword) {
            res.status(400).json({message: 'Incorrect password. Please try again.'});
            return;
        }
        
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json({user: userData, message: 'You are now logged in!'})
        })
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
});

router.post('/logout', (req, res) => {
        if (req.session.logged_in) {
            req.session.destroy(() => {
                res.status(204).end();
            })
        } else {
            res.status(400).end();
        }

});

module.exports = router;