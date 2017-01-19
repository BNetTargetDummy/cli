#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'profile',
    describe: 'Fetch a Diablo 3 Profile',
    builder: yargs => {
      return yargs
        .options({
          battletag: {
            alias: 'b',
            describe: 'The [battletag] of the {profile}',
            type: 'string',
            demand: true,
          },
          hero: {
            alias: 'i',
            describe: 'The [id] of the {hero}',
            type: 'number',
          },
        });
    },
    handler: argv => {
      const { origin, locale, battletag, hero } = argv;

      return blizzard.d3.profile({ origin, locale, tag: battletag, hero })
        .then(response => console.log(JSON.stringify(response.data)))
        .catch(err => console.log(JSON.stringify(err.response.data)));
    },
  }).argv;

module.exports = request;
