#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'ladder',
    describe: 'Fetch a Starcraft 2 Ladder',
    builder: (yargs) => {
      return yargs
        .options({
          id: {
            alias: 'i',
            describe: 'The [id] of the {ladder}',
            type: 'number',
          },
        })
        .demandOption(['id'], 'Please specify the [id] of the {ladder}');
    },
    handler: argv => {
      const { origin, locale } = argv;

      return blizzard.sc2.ladder({ origin, locale })
        .then(response => {
          console.log(JSON.stringify(response.data));
        });
    },
  }).argv;

module.exports = request;
