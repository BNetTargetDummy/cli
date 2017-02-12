#! /usr/bin/env node

const yargs = require('yargs');
const logger = require('../../../lib/logger');

const request = yargs
  .command({
    command: 'boss',
    describe: 'Fetch World of Warcraft boss data',
    builder: yargs => {
      return yargs
        .options({
          id: {
            alias: 'i',
            describe: 'The [id] of the {boss}',
          },
        });
    },
    handler: argv => logger('wow', 'boss', argv),
  }).argv;

module.exports = request;
