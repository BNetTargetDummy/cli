#! /usr/bin/env node

const yargs = require('yargs');
const logger = require('../../../lib/logger');

const request = yargs
  .command({
    command: 'recipe',
    describe: 'Fetch a World of Warcraft recipe',
    builder: yargs => {
      return yargs
        .options({
          id: {
            alias: 'i',
            describe: 'The [id] of the {recipe}',
            type: 'number',
            demand: true,
          },
        });
    },
    handler: argv => logger('wow', 'recipe', argv),
  }).argv;

module.exports = request;
