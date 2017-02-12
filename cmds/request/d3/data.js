#! /usr/bin/env node

const yargs = require('yargs');
const logger = require('../../../lib/logger');

const request = yargs
  .command({
    command: 'data',
    describe: 'Fetch a Diablo 3 data resource',
    builder: yargs => {
      return yargs
        .options({
          key: {
            alias: 'k',
            describe: 'The data key to be requested',
            choices: ['artisan', 'follower', 'item'],
            type: 'string',
            demand: true,
          },
          id: {
            alias: 'i',
            describe: 'The [id] of the {key}',
            type: 'string',
            demand: true,
          },
        });
    },
    handler: argv => logger('d3', 'data', argv),
  }).argv;

module.exports = request;
