#! /usr/bin/env node

const yargs = require('yargs');
const logger = require('../../../lib/logger');

const request = yargs
  .command({
    command: 'ladder',
    describe: 'Fetch a Starcraft 2 ladder',
    builder: yargs => {
      return yargs
        .options({
          id: {
            alias: 'i',
            describe: 'The [id] of the {ladder}',
            type: 'number',
            demand: true,
          },
        });
    },
    handler: argv => logger('sc2', 'ladder', argv),
  }).argv;

module.exports = request;
