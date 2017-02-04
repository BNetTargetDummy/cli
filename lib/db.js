#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'targetdummy',
  null,
  null, {
    dialect: 'sqlite',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    storage: path.normalize(`${__dirname}/../database/targetdummy.sqlite`),
    logging: false,
  });

fs.readdirSync(`${__dirname}/schema`).forEach(file => sequelize.import(`${__dirname}/schema/${file}`));

sequelize.sync();

module.exports = sequelize;
