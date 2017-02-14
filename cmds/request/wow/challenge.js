#! /usr/bin/env node

const yargs = require('yargs');
const logger = require('../../../lib/logger');

const request = yargs
  .command({
    command: 'challenge',
    describe: 'Fetch World of Warcraft challenge data',
    builder: yargs => {
      return yargs
        .options({
          realm: {
            alias: 'r',
            describe: 'The [realm] of the {challenge}',
            type: 'string',
            demand: true,
          },
        });
    },
    handler: argv => logger('wow', 'challenge', argv),
  }).argv;

module.exports = request;
