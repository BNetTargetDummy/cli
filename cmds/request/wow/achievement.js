#! /usr/bin/env node

const yargs = require('yargs');
const logger = require('../../../lib/logger');

const request = yargs
  .command({
    command: 'achievement <id>',
    describe: 'Fetch a World of Warcraft achievement',
    builder: yargs => {
      return yargs
    },
    handler: argv => logger('wow', 'achievement', argv),
  }).argv;

module.exports = request;
