const { Portfolio } = require('../models');

const portfolioData = [
    {
        "full_name": "aye yooo",
        "job_title": "it pays me",
        "about": "it do be that way",
        "phone": "615-666-6969",
        "country": "merica",
        "city": "ur city",
        "linkedin": "you",
        "github": "eat some grub",
        "school": "is for nerds",
        "course": "this one",
        "graduation_date": "never ever nerd",
        "role": "Big Jock FLEXX DIESEL OF ;)",
        "company": "FLEXX DIESEL SENSATATION INC",
        "location": "unknown to sexy to know",
        "job_starting": "now",
        "job_ending": "never",
        "job_description": "rub the muscles with oil ",
        "project_name": "dont ask dont tell",
        "repository": "check yourself",
        "project_description": "keep my fucking wifes name out ya motherfucking mouf -will smith"
    },
]

const seedPortfolio = () =>  Portfolio.bulkCreate(portfolioData);


module.exports = seedPortfolio;