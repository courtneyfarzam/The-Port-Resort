const sequelize = require('../config/connection');

const userData = require('./userData');
const portfolioData = require('./portfolioData');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await userData();
    console.log('\n----- USER DATA SYNCED -----\n');

    await portfolioData();
    console.log('\n----- PORTFOLIO DATA SYNCED -----\n');

    process.exit();
}

seedDatabase();