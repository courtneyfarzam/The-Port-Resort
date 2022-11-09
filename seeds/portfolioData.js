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
    {
        "full_name": "yooo",
        "job_title": " pays me",
        "about": "it do be that",
        "phone": "-666-6969",
        "country": "america",
        "city": " city",
        "linkedin": "you're",
        "github": "eat grub",
        "school": "is for nerd",
        "course": "this ones",
        "graduation_date": "never ever",
        "role": "Big FLEXX DIESEL OF ;)",
        "company": "FLEXX DIESEL",
        "location": "unknown to sexy",
        "job_starting": "know",
        "job_ending": "never ever",
        "job_description": "the muscles with oil ",
        "project_name": "ask dont tell",
        "repository": "yourself",
        "project_description": " my fucking wifes name out ya motherfucking mouf -will smith"
    },
    {
        "full_name": "hey aye yooo",
        "job_title": "ohhh it pays me",
        "about": "why it do be that way",
        "phone": "911-615-666-6969",
        "country": "america vs you",
        "city": "the city",
        "linkedin": "mine",
        "github": "eat some ass",
        "school": "is for heros",
        "course": "that one",
        "graduation_date": "fever ever nerd",
        "role": "lol Jock FLEXX DIESEL OF ;)",
        "company": " SENSATATION INC",
        "location": "unknown sexy",
        "job_starting": "known",
        "job_ending": "never ever loser",
        "job_description": "rub the muscles with ",
        "project_name": "dont ask dont",
        "repository": "check ",
        "project_description": "keep my fucking wifes name out ya motherfucking mouf"
    },
]

const seedPortfolio = () =>  Portfolio.bulkCreate(portfolioData);


module.exports = seedPortfolio;