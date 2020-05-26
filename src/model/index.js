require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_ID, process.env.DB_PW, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    dialectOptions: {
      useUTC: false, // for reading from database
    },
    timezone: '+09:00'
});

// user 해당 정보
const user = sequelize.define("user", {
    id: {
        field: 'id',
        type: Sequelize.DataTypes.STRING(20),
        primaryKey: true
    },
    pw: {
        field: 'pw',
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false,
    },
    name: {
        field: 'name',
        type: Sequelize.DataTypes.STRING(10),
        allowNull: false,
    },
    email: {
        field: 'email',
        type: Sequelize.DataTypes.STRING(30),
        allowNull: false,
    },
}, {
    timestamps: false,
});

user.sync();
// const result = user.findAll({  });

module.exports = {
    getUser: () => {
        return user.findAll();
    },user
}