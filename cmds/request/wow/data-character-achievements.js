#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'data-character-achievements',
    describe: 'Fetch a World of Warcraft Data Character Achievements',
    builder: (yargs) => {
      return yargs;
    },
    handler: (argv) => {
      const { origin, locale } = argv;

      return blizzard.wow.data(['characters', 'achievements'], { origin, locale })
        .then(response => {
          console.log(JSON.stringify(response.data));
        });
    },
  }).argv;

module.exports = request;
