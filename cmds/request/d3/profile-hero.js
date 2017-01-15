#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'profile-hero',
    describe: 'Fetch a Diablo 3 Hero',
    builder: (yargs) => {
      return yargs
        .options({
          battletag: {
            alias: 'b',
            describe: 'The [battletag] of the {profile}',
            type: 'string',
          },
          id: {
            alias: 'i',
            describe: 'The [id] of the {hero}',
            type: 'string',
          },
        })
        .demandOption(['battletag', 'id'], 'Please specify the [battletag] and [id] of the {profile} and {hero}');
    },
    handler: argv => {
      const { origin, locale, battletag, id } = argv;

      return blizzard.d3.profile({ origin, locale, battletag, id })
        .then(response => {
          console.log(JSON.stringify(response.data));
        });
    },
  }).argv;

module.exports = request;
