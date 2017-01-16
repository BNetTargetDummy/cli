#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'profile-matches',
    describe: 'Fetch Starcraft 2 Profile match history',
    builder: (yargs) => {
      return yargs
        .options({
          id: {
            alias: 'i',
            describe: 'The [id] of the {profile}',
            type: 'number',
          },
          region: {
            alias: 'r',
            describe: 'The [region] of the {profile}',
            default: 1,
            type: 'number',
          },
          name: {
            alias: 'n',
            describe: 'The [name] of the {profile}',
            type: 'string',
          },
        })
        .demandOption(['id', 'region', 'name'], 'Please provide at least the [id] and [name] of the {profile}');
    },
    handler: argv => {
      const { origin, locale, id, region, name } = argv;

      return blizzard.sc2.profile('matches', { origin, locale, id, region, name })
        .then(response => {
          console.log(JSON.stringify(response.data));
        });
    },
  }).argv;

module.exports = request;
