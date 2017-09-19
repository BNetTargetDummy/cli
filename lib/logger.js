#! /usr/bin/env node

const async = require('async');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });
const argv = require('./argv');
const db = require('./db');

module.exports = (command, resource, obj) => {
  const args = argv[command](resource, obj);
  function display (request) {
    console.log(request.response);
  }


  return db.models.RecentRequest.findOne({
    where: { command, resource, args: JSON.stringify(args) },
    updatedAt: {
      $lt: new Date(), // between now
      $gt: new Date(new Date() - 6 * 60 * 60 * 1000), // and 6 hours ago @TODO make this configurable
    },
  })
  .then(request => {
    if (request) {
      return display(request);
    }

    async.waterfall([
      (next) => {
        return blizzard[command][resource](...args)
          .then(response => next(null, response))
          .catch(err => next(err.response, null));
      },
      (response, next) => {
        return db.models.RecentRequest.create({
          command,
          resource,
          args: JSON.stringify(args),
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

      return display(result.get());
      // return console.log(result.get()); // TODO log with winston.info
    });
  })
  .catch(err => {
    return console.log(err); // TODO log with winston.error
  });
};
