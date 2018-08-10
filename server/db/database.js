const chalk = require(`chalk`);
const Sequelize = require(`sequelize`);

console.log(chalk.magenta(`Opening database connection...`));

const db = new Sequelize(`postgres://localhost:5432/grace-shopper`, { logging: false });

module.exports = db;
