#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'data-follower',
    describe: 'Fetch a Diablo 3 Follower',
    builder: (yargs) => {
      return yargs
        .options({
          follower: {
            alias: 'f',
            describe: 'The [id] of the {follower}',
            choices: ['enchantress', 'scoundrel', 'templar'],
            default: 'templar',
          },
        })
        .demandOption(['follower'], 'Please specify the [follower]');
    },
    handler: argv => {
      const { origin, locale, follower } = argv;

      return blizzard.d3.data('follower', { origin, locale, follower })
        .then(response => {
          console.log(JSON.stringify(response.data));
        });
    },
  }).argv;

module.exports = request;
