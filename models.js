const Sequelize = require('sequelize');
const database = require('./database');

const _food = database.define("_food", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    location: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

module.exports._food = _food;