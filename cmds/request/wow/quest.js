#! /usr/bin/env node

const yargs = require('yargs');
const logger = require('../../../lib/logger');

const request = yargs
  .command({
    command: 'quest',
    describe: 'Fetch a World of Warcraft quest',
    builder: yargs => {
      return yargs
        .options({
          id: {
            alias: 'i',
            describe: 'The [id] of the {quest}',
            type: 'number',
            demand: true,
          },
        });
    },
    handler: argv => logger('wow', 'quest', argv),
  }).argv;

module.exports = request;
