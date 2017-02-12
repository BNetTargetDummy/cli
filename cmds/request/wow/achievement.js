#! /usr/bin/env node

const yargs = require('yargs');
const logger = require('../../../lib/logger');

const request = yargs
  .command({
    command: 'achievement',
    describe: 'Fetch a World of Warcraft achievement',
    builder: yargs => {
      return yargs
        .options({
          id: {
            alias: 'i',
            describe: 'The [id] of the {achievement}',
            demand: true,
          },
        });
    },
    handler: argv => logger('wow', 'achievement', argv),
  }).argv;

module.exports = request;
