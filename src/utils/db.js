require('dotenv').config();
const {Sequelize} = require('sequelize');


const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      logging: process.env.NODE_ENV === 'development' ?
                (...msg) => console.log(msg) : false,
      dialect: 'mysql',
    },
);

sequelize
    .authenticate()
    .then(() => {
      console.log('connected ... ');
    })
    .catch((err) => {
      console.log('error connected : ' + err.message);
    });

// Sync Database
sequelize.sync();


module.exports = sequelize;
