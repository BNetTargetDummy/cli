#! /usr/bin/env node

const yargs = require('yargs');
const logger = require('../../../lib/logger');

const request = yargs
  .command({
    command: 'spell',
    describe: 'Fetch a World of Warcraft spell',
    builder: yargs => {
      return yargs
        .options({
          id: {
            alias: 'i',
            describe: 'The [id] of the {spell}',
            type: 'number',
            demand: true,
          },
        });
    },
    handler: argv => logger('wow', 'spell', argv),
  }).argv;

module.exports = request;
