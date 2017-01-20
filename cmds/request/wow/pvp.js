#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'pvp',
    describe: 'Fetch a World of Warcraft PvP bracket',
    builder: yargs => {
      return yargs
        .options({
          bracket: {
            alias: 'b',
            describe: 'The [bracket] of the PvP leaderboard',
            choices: ['2v2', '3v3', '5v5', 'rgb'],
            type: 'string',
            demand: true,
          },
        });
    },
    handler: argv => {
      const { origin, locale, bracket } = argv;

      return blizzard.wow.pvp({ origin, locale, bracket })
        .then(response => console.log(JSON.stringify(response.data)))
        .catch(err => console.log(JSON.stringify(err.response.data)));
    },
  }).argv;

module.exports = request;
