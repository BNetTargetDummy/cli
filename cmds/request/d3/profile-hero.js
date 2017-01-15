#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'profile-hero',
    describe: 'Fetch a Diablo 3 Profile Hero',
    builder: (yargs) => {
      return yargs
        .options({
          origin: {
            alias: 'o',
            describe: 'The API endpoint to make the request to',
            choices: ['us', 'eu'],
            default: 'us',
          },
          battletag: {
            alias: 'b',
            describe: 'The [battletag] of the {profile/hero}',
            type: 'string',
          },
          id: {
            alias: 'i',
            describe: 'The [id] of the {profile/hero}',
            type: 'string',
          },
        })
        .demandOption(['battletag', 'id'], 'Please provide at least the [battletag] and [id] of the {profile/hero}');
    },
    handler: argv => {
      const { origin, battletag, id } = argv;

      return blizzard.d3.profile({ origin, battletag, id })
        .then(response => {
          console.log(JSON.stringify(response.data));
        });
    },
  }).argv;

module.exports = request;
