#! /usr/bin/env node

const yargs = require('yargs');
const logger = require('../../../lib/logger');

const request = yargs
  .command({
    command: 'auction',
    describe: 'Fetch World of Warcraft auction house data',
    builder: (yargs) => {
      return yargs
        .options({
          realm: {
            alias: 'r',
            describe: 'The auction house [realm]',
            demand: true,
          },
        });
    },
    handler: argv => logger('wow', 'auction', argv),
  }).argv;

module.exports = request;
