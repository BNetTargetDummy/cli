#! /usr/bin/env node

const yargs = require('yargs');
const logger = require('../../../lib/logger');

const guild = yargs
  .command({
    command: 'guild',
    describe: 'Fetch a World of Warcraft guild',
    builder: yargs => {
      return yargs
        .options({
          realm: {
            alias: 'r',
            describe: 'The [realm] of the {guild}',
            type: 'string',
            demand: true,
          },
          name: {
            alias: 'n',
            describe: 'The name of the guild',
            type: 'string',
            demand: true,
          },
          fields: {
            alias: 'f',
            describe: 'A list of one or more [fields] belonging to the {guild}',
            choices: ['profile', 'achievements', 'members', 'news', 'challenge'],
            default: 'profile',
            array: true,
          },
        });
    },
    handler: argv => logger('guild', argv),
  }).argv;

module.exports = guild;
