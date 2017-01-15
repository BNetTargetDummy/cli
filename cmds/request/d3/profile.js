#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'profile',
    describe: 'Fetch a Diablo 3 Profile',
    builder: (yargs) => {
      return yargs
        .options({
          battletag: {
            alias: 'b',
            describe: 'The [battletag] of the {profile}',
            type: 'string',
          },
        })
        .demandOption(['battletag'], 'Please specify the [battletag] of the {profile}');
    },
    handler: argv => {
      const { origin, locale, battletag } = argv;

      return blizzard.d3.profile({ origin, locale, battletag })
        .then(response => {
          console.log(JSON.stringify(response.data));
        });
    },
  }).argv;

module.exports = request;
