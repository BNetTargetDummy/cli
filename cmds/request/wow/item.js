#! /usr/bin/env node

const yargs = require('yargs');
const logger = require('../../../lib/logger');

const request = yargs
  .command({
    command: 'item',
    describe: 'Fetch a World of Warcraft item or set',
    builder: yargs => {
      return yargs
        .options({
          id: {
            alias: 'i',
            describe: 'The [id] of the {item}',
            type: 'number',
            demand: true,
          },
          set: {
            alias: 's',
            describe: 'Whether this [id] is for a {set}',
            type: 'boolean',
            default: false,
          },
        });
    },
    handler: argv => logger('wow', 'item', argv),
  }).argv;

module.exports = request;
