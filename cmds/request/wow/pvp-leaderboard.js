#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'pvp-leaderboard',
    describe: 'Fetch a World of Warcraft PvP Bracket',
    builder: (yargs) => {
      return yargs
        .options({
          origin: {
            alias: 'o',
            describe: 'The API endpoint to make the request to',
            choices: ['us', 'eu'],
            default: 'us',
          },
          bracket: {
            alias: 'b',
            describe: 'The [bracket] of the {pvp/leaderboard}',
            choices: ['2v2', '3v3', '5v5', 'rgb'],
            type: 'string',
          },
        })
        .demandOption(['bracket'], 'Please provide at least the [bracket] of the {pvp/leaderboard}');
    },
    handler: argv => {
      const { origin, bracket } = argv;

      return blizzard.wow.pvp({ origin, bracket })
        .then(response => {
          console.log(JSON.stringify(response.data));
        });
    },
  }).argv;

module.exports = request;
