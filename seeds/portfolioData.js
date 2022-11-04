const { Portfolio } = require('../models');

const portfolioData = [
    {
        "full_name": "",
        "job_title": "",
        "about": "",
        "phone": "",
        "country": "",
        "city": "",
        "linkedin": "",
        "github": "",
        "school": "",
        "course": "",
        "graduation_date": "",
        "role": "",
        "company": "",
        "location": "",
        "job_starting": "",
        "job_ending": "",
        "job_description": "",
        "project_name": "",
        "repository": "",
        "project_description": ""
    }
]

const seedPortfolio = () => {
    Portfolio.bulkCreate(portfolioData);
};

module.exports = seedPortfolio;