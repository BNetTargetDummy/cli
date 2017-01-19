#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'data',
    describe: 'Fetch a World of Warcraft data resource',
    builder: yargs => {
      return yargs
        .options({
          key: {
            alias: 'k',
            describe: 'The data key to be requested',
            choices: ['battlegroups', 'character:achievements', 'character:classes', 'character:races', 'guild:achievements', 'guild:rewards', 'guild:perks', 'item:classes', 'talents', 'pet:types'],
            type: 'string',
            demand: true,
          },
        });
    },
    handler: argv => {
      const { origin, locale, key } = argv;

      return blizzard.wow.data(key.replace(':', '-'), { origin, locale })
        .then(response => console.log(JSON.stringify(response.data)))
        .catch(err => console.log(JSON.stringify(err.response.data)));
    },
  }).argv;

module.exports = request;
