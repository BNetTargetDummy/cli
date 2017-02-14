#! /usr/bin/env node

const yargs = require('yargs');
const logger = require('../../../lib/logger');

const request = yargs
  .command({
    command: 'realms',
    describe: 'Fetch World of Warcraft realm list and status',
    builder: yargs => {
      return yargs
        .options({
          realms: {
            alias: 'r',
            describe: 'One or more [realms] to fetch. Omit for all realms',
            type: 'array',
          },
        });
    },
    handler: argv => logger('wow', 'realms', argv),
  }).argv;

module.exports = request;
