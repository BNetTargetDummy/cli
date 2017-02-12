#! /usr/bin/env node

const yargs = require('yargs');
const logger = require('../../../lib/logger');

const request = yargs
  .command({
    command: 'mount',
    describe: 'Fetch World of Warcraft mount data',
    builder: yargs => {
      return yargs;
    },
    handler: argv => logger('wow', 'mount', argv),
  }).argv;

module.exports = request;
