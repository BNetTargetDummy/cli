#! /usr/bin/env node

const yargs = require('yargs');
const blizzard = require('blizzard.js').initialize({ apikey: process.env.BATTLENET_CLIENT_ID });

const request = yargs
  .command({
    command: 'data',
    describe: 'Fetch a Starcraft 2 data resource',
    builder: yargs => {
      return yargs
        .options({
          key: {
            alias: 'k',
            describe: 'The data key to be requested',
            choices: ['achievements', 'rewards'],
            demand: true,
            type: 'string',
          },
        });
    },
    handler: argv => {
      const { origin, locale, key } = argv;

      return blizzard.sc2.data(key, { origin, locale, key })
        .then(response => console.log(response.data))
        .catch(err => console.log(err.response.data));
    },
  }).argv;

module.exports = request;
