#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'era',
    describe: 'Fetch a Diablo 3 era',
    builder: yargs => {
      return yargs
        .options({
          id: {
            alias: 'i',
            type: 'number',
          },
          leaderboard: {
            alias: 'b',
            type: 'string',
          },
          token: {
            alias: 't',
            type: 'string',
            demand: true,
          },
        });
    },
    handler: argv => {
      const { origin, locale, id, leaderboard, token } = argv;

      return blizzard.d3.era({ origin, locale, id, leaderboard, access_token: token })
        .then(response => console.log(JSON.stringify(response.data)))
        .catch(err => console.log(JSON.stringify(err.response.data)));
    },
  }).argv;

module.exports = request;
