#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'data-rewards',
    describe: 'Fetch all Starcraft 2 Rewards',
    builder: (yargs) => {
      return yargs;
    },
    handler: argv => {
      const { origin, locale } = argv;

      return blizzard.sc2.data('rewards', { origin, locale })
        .then(response => {
          console.log(JSON.stringify(response.data));
        });
    },
  }).argv;

module.exports = request;
