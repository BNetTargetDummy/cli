#! /usr/bin/env node

const async = require('async');
const blizzard = require('./blizzard');
const db = require('./db');

module.exports = (command, args) => {
  return db.models.RecentRequest.findOne({
    where: { command },
    updatedAt: {
      $lt: new Date(), // between now
      $gt: new Date(new Date() - 6 * 60 * 60 * 1000), // and 6 hours ago @TODO make this configurable
    },
  })
  .then(request => {
    if (request) {
      return console.log(request.get()); // TODO log with winston.info
    }

    async.waterfall([
      (next) => {
        blizzard.wow(command, args)
          .then(response => next(null, response))
          .catch(err => next(err.response, null));
      },
      (response, next) => {
        return db.models.RecentRequest.create({
          command,
          // arguments: name,
          header: JSON.stringify(response.headers),
          response: JSON.stringify(response.data),
        })
        .then(request => next(null, request))
        .catch(err => next(err, null));
      },
    ], (err, result) => {
      if (err) {
        return console.log(err); // TODO log with winston.error
      }

      return console.log(result.get()); // TODO log with winston.info
    });
  })
  .catch(err => {
    return console.log(err); // TODO log with winston.error
  });
};
