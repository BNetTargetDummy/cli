#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'pet',
    describe: 'Fetch a World of Warcraft Pet',
    builder: (yargs) => {
      return yargs;
    },
    handler: (argv) => {
      const { origin, locale } = argv;

      return blizzard.wow.pet({ origin, locale })
        .then(response => {
          console.log(JSON.stringify(response.data));
        });
    },
  }).argv;

module.exports = request;
