const fs = require('fs');
const path = require('path');
const Sequelize = require("sequelize");

let db = {};
let sequelize;

if (process.env.DATABASE_URL) {
  //const sequelize = new Sequelize(process.env.DATABASE_URL, config);
} else {
  //const sequelize = new Sequelize(config.database, config.username, config.password, config);
  sequelize = new Sequelize(
    'targetdummy',
    null,
    null, {
      dialect: 'sqlite',
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      },
      storage: './database/targetdummy.sqlite'
    });
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    let model = sequelize.import(path.join(__dirname, file));
    console.log(model.name);
    db[model] = model;
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
