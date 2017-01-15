#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'data-follower',
    describe: 'Fetch a Diablo 3 Data Follower',
    builder: (yargs) => {
      return yargs
        .options({
          origin: {
            alias: 'o',
            describe: 'The API endpoint to make the request to',
            choices: ['us', 'eu'],
            default: 'us',
          },
          follower: {
            alias: 'f',
            describe: 'The [follower] of the {data/follower}',
            choices: ['enchantress', 'scoundrel', 'templar'],
            default: 'templar',
          },
        })
        .demandOption(['follower'], 'Please provide at least the [follower] of the {data/follower}');
    },
    handler: argv => {
      const { origin, follower } = argv;

      return blizzard.d3.data(['follower'], { origin, follower })
        .then(response => {
          console.log(JSON.stringify(response.data));
        });
    },
  }).argv;

module.exports = request;
