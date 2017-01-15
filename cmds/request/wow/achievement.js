#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'achievement',
    describe: 'Fetch a World of Warcraft Achievement',
    builder: (yargs) => {
      return yargs
        .options({
          id: {
            alias: 'i',
            describe: 'The [id] of the {achievement}',
          },
        })
        .demandOption(['id'], 'Please provide at least the [id] of the {achievement}');
    },
    handler: argv => {
      const { origin, locale, id } = argv;

      return blizzard.wow.achievement({ origin, locale, id })
        .then(response => {
          console.log(JSON.stringify(response.data));
        });
    },
  }).argv;

module.exports = request;
