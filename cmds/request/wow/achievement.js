#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });
const logger = require('@targetdummy/logger');

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
    handler: argv => {
      const { origin, locale, id } = argv;

      return blizzard.wow.achievement({ origin, locale, id })
        .then(response => logger(argv.target, argv.filename).info(response.data))
        .catch(err => logger(argv.target, argv.filename).error(err.response.data));
    },
  }).argv;

module.exports = request;
