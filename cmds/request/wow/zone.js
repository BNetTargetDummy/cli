#! /usr/bin/env node

const yargs = require('yargs');
const logger = require('../../../lib/logger');

const request = yargs
  .command({
    command: 'zone',
    describe: 'Fetch a World of Warcraft zone',
    builder: yargs => {
      return yargs
        .options({
          id: {
            alias: 'i',
            describe: 'The [id] of the {zone}',
            type: 'number',
            demand: true,
          },
        });
    },
    handler: argv => logger('wow', 'zone', argv),
  }).argv;

module.exports = request;
