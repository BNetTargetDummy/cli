#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'profile',
    describe: 'Fetch a Starcraft 2 profile',
    builder: yargs => {
      return yargs
        .options({
          key: {
            alias: 'k',
            describe: 'The {profile} resource to be requested',
            choices: ['profile', 'ladders', 'matches'],
            default: 'profile',
            type: 'string',
          },
          id: {
            alias: 'i',
            describe: 'The [id] of the {profile}',
            type: 'number',
            demand: true,
          },
          name: {
            alias: 'n',
            describe: 'The [name] of the {profile}',
            type: 'string',
            demand: true,
          },
          region: {
            alias: 'r',
            describe: 'The [region] of the {profile}',
            default: 1,
            type: 'number',
          },
        });
    },
    handler: argv => {
      const { origin, locale, key, id, name, region } = argv;

      return blizzard.sc2.profile(key, { origin, locale, id, name, region })
        .then(response => console.log(JSON.stringify(response.data)))
        .catch(err => console.log(JSON.stringify(err.response.data)));
    },
  }).argv;

module.exports = request;
